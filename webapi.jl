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
    cars = []

    for agent in allagents(model)
        if agent isa Car
            push!(stopLights, agent)
            json(Dict("Location" => "/simulations/$id", "stopLights" => stopLights))
        elseif agent isa stopLight
            push!(cars, agent)
            json(Dict("Location" => "/simulations/$id", "cars" => cars))
        end
    end
end

route("/simulations/:id") do
    println(payload(:id))
    model = instances[payload(:id)]
    run!(model, 1)
    cars = []
    stopLights = []

    for agent in allagents(model)
        if agent isa Car
            push!(cars, agent)
            json(Dict("cars" => cars))
        elseif agent isa stopLight
            push!(stopLights, agent)
            json(Dict("stopLights" => stopLights))
        end
    end
end


Genie.config.run_as_server = true
Genie.config.cors_headers["Access-Control-Allow-Origin"] = "*"
Genie.config.cors_headers["Access-Control-Allow-Headers"] = "Content-Type"
Genie.config.cors_headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS" 
Genie.config.cors_allowed_origins = ["*"]

up()