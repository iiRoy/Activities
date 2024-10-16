using Agents, Random
using StaticArrays: SVector

# Estados de los Semáforos
@enum LightColor green yellow red
@enum Streets av1 av2

@agent struct Car(ContinuousAgent{2,Float64})
    accelerating::Bool = true
    street::Streets = av1
end

@agent struct stopLight(ContinuousAgent{2,Float64})
    status::LightColor = red
    time_counter::Int = 0
    street::Streets = av1
end

green_duration = 25
yellow_duration = 10


accelerate(agent::Car) = agent.street === av1 ? agent.vel[1] + 0.05 : agent.vel[2] + 0.05 
decelerate(agent::Car) = agent.street === av1 ? agent.vel[1] - 0.3 : agent.vel[2] - 0.3

# Verificar el semáforo más cercano delante en el eje X
function closest_car_ahead(agent::Car, model)
    closest_car = nothing
    min_distance = Inf
    
    # Buscar coches dentro de un radio de 30.0 unidades
    for neighbor in nearby_agents(agent, model, 70.0)
        if isa(neighbor, Car) && agent.street === neighbor.street  # Solo considerar coches en la misma calle
            if agent.street === av1 && neighbor.pos[1] > agent.pos[1]  # Para av1 (eje X)
                dist_to_neighbor = neighbor.pos[1] - agent.pos[1]
            elseif agent.street === av2 && neighbor.pos[2] > agent.pos[2]  # Para av2 (eje Y)
                dist_to_neighbor = neighbor.pos[2] - agent.pos[2]
            else
                continue  # Ignorar si el vecino está detrás del coche
            end

            # Seleccionar el coche más cercano
            if dist_to_neighbor < min_distance
                min_distance = dist_to_neighbor
                closest_car = neighbor
            end
        end
    end

    return closest_car, min_distance
end

# Verificar el semáforo más cercano delante en el eje X
function closest_light_ahead(agent::Car, model)
    closest_light = nothing
    min_distance = Inf
    
    # Buscar semáforos dentro de un radio de 30.0 unidades
    for neighbor in nearby_agents(agent, model, 30.0)
        if isa(neighbor, stopLight) && neighbor.pos[2] < agent.pos[2]  # Asegurar que están en la misma calle (misma posición en Y)
            
            # Verificar que el semáforo esté delante del coche en el eje X
            if neighbor.pos[1] > agent.pos[1]
                dist_to_light = neighbor.pos[1] - agent.pos[1]
                
                # Seleccionar el semáforo más cercano en el eje X
                if dist_to_light < min_distance
                    min_distance = dist_to_light
                    closest_light = neighbor
                end
            end
        end
    end
    
    return closest_light, min_distance
end

# Comportamiento del auto
function agent_step!(agent::Car, model)
    # Verificar el coche más cercano
    closest_car, dist_to_car = closest_car_ahead(agent, model)
    # Verificar el semáforo más cercano
    light, dist_to_light = closest_light_ahead(agent, model)

    decrement = agent.street === av1 ? (max(0.0, decelerate(agent)), 0.0) : (0.0, max(0.0, decelerate(agent)))
    increment = agent.street === av1 ? (min(1.0, accelerate(agent)), 0.0) : (0.0, min(1.0, accelerate(agent)))

    # Verificar si hay un coche delante
    if closest_car !== nothing
        if dist_to_car <= 1.5 # Distancia crítica, detenerse
            agent.vel = (0.0, 0.0)
        elseif dist_to_car <= 2.5 && dist_to_light >= 0.3  # Distancia de seguridad, desacelerar
            agent.vel = decrement
        else  # Si está a una distancia segura, continuar acelerando
            agent.vel = increment
        end
    end

    if light !== nothing
        positioning = agent.street === av1 ? agent.pos[1] > light.pos[1] : agent.pos[2] > light.pos[2]
        if light.status == red
            if dist_to_light < 0.8 || positioning
                agent.vel = (0.0, 0.0)
            elseif dist_to_light <= 1.5 && dist_to_light >= 0.8
                agent.vel = decrement
            end
        elseif light.status == yellow && dist_to_light <= 3.0 && dist_to_light >= 1
            # Desacelerar si el semáforo está en amarillo y está a menos de 3.0 unidades
            agent.vel = decrement
        else
            # Acelerar si el semáforo está en verde o está lejos
            agent.vel = increment
        end
    else
        # Si no hay semáforo cerca, continuar acelerando
        agent.vel = increment
    end

    # Mover el auto en el espacio (eje X)
    move_agent!(agent, model, 0.4)
end


function agent_step!(agent::stopLight, model)
    cycle_length = 2 * (green_duration + yellow_duration)  # Ciclo completo de 28 pasos

    # Incrementamos el contador de tiempo del agente
    agent.time_counter += 1

    # Si el contador alcanza el final del ciclo, lo reiniciamos
    if agent.time_counter > cycle_length
        agent.time_counter = 1
    end

    # Cambiamos el estado del semáforo en función del contador
    if agent.time_counter <= green_duration
        agent.status = green
    elseif agent.time_counter <= green_duration + yellow_duration
        agent.status = yellow
    else
        agent.status = red
    end
end

function initialize_model(extent = (25, 10))
    space2d = ContinuousSpace(extent; spacing = 0.5, periodic = true)
    
    rng = Random.MersenneTwister()
    
    model = StandardABM(Union{Car, stopLight}, space2d; rng, agent_step!, scheduler = Schedulers.fastest)
    #model = StandardABM(stopLight, space2d; agent_step!, scheduler = Schedulers.Randomly())
    #model = StandardABM(Car, space2d; rng, agent_step!, scheduler = Schedulers.Randomly())
    add_agent!(stopLight, model; pos = SVector{2, Float64}(12, 3.5), vel = SVector{2, Float64}(0.0, 0.0))
    add_agent!(stopLight, model; pos = SVector{2, Float64}(16.3, 8.5), vel = SVector{2, Float64}(0.0, 0.0))
    changing = true
    for agent in allagents(model)
        if changing === true
            agent.status = green
            agent.street = av1
            changing = false
        else
            agent.status = red
            agent.time_counter = green_duration + yellow_duration
            agent.street = av2
            changing = true
        end
    end
    first = true
    vertical = false
    range = 10
    for px in randperm(range)[1:4]
        if vertical === false
            range = 10
        else
            range = 10
        end
        if first
            if changing === true
                add_agent!(Car, model;pos = (px, 7), vel=SVector{2, Float64}(0.1, 0.0),street = av1)
                vertical = true
                changing = false
            else
                add_agent!(Car, model;pos = (14, px), vel=SVector{2, Float64}(0.0, 0.1),street = av2)
                first = false
                vertical = false
            end
        else
            if vertical === false
                add_agent!(Car, model; pos = (px, 7),  vel=SVector{2, Float64}(0.1, 0.0),street = av1)
                vertical = true
            else
                add_agent!(Car, model; pos = (14, px),  vel=SVector{2, Float64}(0.0, 0.1),street = av2)
                vertical = false
            end
        end
    end
    model
end

#Semáforo = 10 pasos en Verde, 4 pasos en Amarillo, 14 pasos en Rojo