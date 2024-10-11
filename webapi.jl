include("simple.jl")
using Genie, Genie.Renderer.Json, Genie.Requests, HTTP
using UUIDs

instances = Dict()

route("/simulations", method = POST) do
    payload = jsonpayload()

    model = initialize_model()
    id = string(uuid1())
    instances[id] = model

    stopLights = []
    for stopLight in allagents(model)
        push!(stopLights, stopLight)
    end
    """
    cars = []
    for car in allagents(model)
        push!(cars, car)
    end
    
    json(Dict("Location" => "/simulations/$id", "cars" => cars))
    """
    json(Dict("Location" => "/simulations/$id", "stopLights" => stopLights))
end

route("/simulations/:id") do
    println(payload(:id))
    model = instances[payload(:id)]
    run!(model, 1)
    """
    cars = []
    for car in allagents(model)
        push!(cars, car)
    end
    
    json(Dict("cars" => cars))
    """
    stopLights = []
    for stopLight in allagents(model)
        push!(stopLights, stopLight)
    end
    
    json(Dict("stopLights" => stopLights))
end


Genie.config.run_as_server = true
Genie.config.cors_headers["Access-Control-Allow-Origin"] = "*"
Genie.config.cors_headers["Access-Control-Allow-Headers"] = "Content-Type"
Genie.config.cors_headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS" 
Genie.config.cors_allowed_origins = ["*"]

up()