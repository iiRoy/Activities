include("simple.jl")
using Genie, Genie.Renderer.Json, Genie.Requests, HTTP
using UUIDs

instances = Dict()

# Ruta para inicializar la simulación
route("/simulations", method = POST) do
    payload = jsonpayload()
    numCarsN = payload["numCarsN"]
    numCarsO = payload["numCarsO"]  

    model = initialize_model(numCarsN=(numCarsN), numCarsO=(numCarsO))
    id = string(uuid1())
    instances[id] = model
    
    stopLights = []
    cars = []

    # Recolectar semáforos y autos en sus respectivas listas
    for agent in allagents(model)
        if agent isa stopLight
            push!(stopLights, agent)
        elseif agent isa Car
            push!(cars, agent)
        end
    end
    
    # Devolver la respuesta con las listas de autos y semáforos
    json(Dict("Location" => "/simulations/$id", "stopLights" => stopLights, "cars" => cars))
end

# Ruta para ejecutar un paso de la simulación
route("/simulations/:id") do
    model_id = payload(:id)
    model = instances[model_id]
    run!(model, 1)

    cars = []
    stopLights = []

    # Recolectar semáforos y autos en sus respectivas listas
    for agent in allagents(model)
        if agent isa stopLight
            push!(stopLights, agent)
        elseif agent isa Car
            push!(cars, agent)
        end
    end

    # Devolver las listas actualizadas de autos y semáforos
    json(Dict("stopLights" => stopLights, "cars" => cars))
end

Genie.config.run_as_server = true
Genie.config.cors_headers["Access-Control-Allow-Origin"] = "*"
Genie.config.cors_headers["Access-Control-Allow-Headers"] = "Content-Type"
Genie.config.cors_headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS"
Genie.config.cors_allowed_origins = ["*"]

up()
