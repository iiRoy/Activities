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
end

green_duration = 25
yellow_duration = 10


accelerate(agent::Car) = agent.vel[1] + 0.05
decelerate(agent::Car) = agent.vel[1] - 0.1

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
    # Verificar el semáforo más cercano
    light, dist_to_light = closest_light_ahead(agent, model)

    if light !== nothing
        if light.status == red
            if dist_to_light <= 0.5 || agent.pos[1] > light.pos[1]
                agent.vel = (0.0, 0.0)
            elseif dist_to_light <= 2.5 && dist_to_light >= 0.5
                agent.vel = (max(0.0, decelerate(agent)), 0.0)
            end
        elseif light.status == yellow && dist_to_light <= 3.0 && dist_to_light >= 1
            # Desacelerar si el semáforo está en amarillo y está a menos de 3.0 unidades
            agent.vel = (max(0.0, decelerate(agent)+ 0.5), 0.0)
        else
            # Acelerar si el semáforo está en verde o está lejos
            agent.vel = (min(1.0, accelerate(agent)), 0.0)
        end
    else
        # Si no hay semáforo cerca, continuar acelerando
        agent.vel = (min(1.0, accelerate(agent)), 0.0)
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
            changing = false
        else
            agent.status = red
            agent.time_counter = green_duration + yellow_duration
            changing = true
        end
    end
    first = true
    vertical = false
    if vertical === false
        range = 25
    else
        range = 10
    end
    for px in randperm(range)[1:4]
        if first
            if changing === false
                add_agent!(Car, model;pos = (px, 7), vel=SVector{2, Float64}(1.0, 0.0)).street = av1
                vertical = true
            else
                add_agent!(Car, model;pos = (14, px), vel=SVector{2, Float64}(1.0, 0.0)).street = av2
                first = false
                vertical = false
            end
        else
            if vertical === false
                add_agent!(Car, model; pos = (px, 7),  vel=SVector{2, Float64}(rand(Uniform(0.2, 0.7)), 1.0)).street = av1
            else
                add_agent!(Car, model; pos = (14, px),  vel=SVector{2, Float64}(rand(Uniform(0.2, 0.7)), 1.0)).street = av2
            end
        end
    end
    model
end

#Semáforo = 10 pasos en Verde, 4 pasos en Amarillo, 14 pasos en Rojo