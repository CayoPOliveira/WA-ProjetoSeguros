from flask import Flask, request, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/ordens": {"origins": "*"}})


# CLIENTES
@app.route('/clientes', methods=['GET'])
def get_all_clients():
    with open('clientes.json', 'r') as file:
        clientes = json.load(file)
        return jsonify(clientes), 200


@app.route('/clientes/<int:client_id>', methods=['GET'])
def get_client_by_id(client_id):
    with open('clientes.json', 'r') as file:
        clientes = json.load(file)
        client = [client for client in clientes if client['id'] == client_id]
        if len(client) == 0:
            return jsonify({'message': 'Client not found'}), 404
        return jsonify(client[0]), 200


@app.route('/clientes', methods=['POST'])
def create_user():
    user_data = request.get_json()
    try:
        with open('clientes.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []
    next_id = max([client['id'] for client in data]) + 1 if data else 1
    user_data['id'] = next_id
    data.append(user_data)
    with open('clientes.json', 'w') as f:
        json.dump(data, f)
    return jsonify({"message": "Usuário cadastrado com sucesso"})


@app.route('/clientes/<int:client_id>', methods=['PUT'])
def update_client(client_id):
    with open('clientes.json', 'r') as file:
        clientes = json.load(file)
        client = [client for client in clientes if client['id'] == client_id]
        if len(client) == 0:
            return jsonify({'message': 'Client not found'}), 404
        client[0]['nome'] = request.json.get('nome', client[0]['nome'])
        client[0]['email'] = request.json.get('email', client[0]['email'])
        client[0]['senha'] = request.json.get('senha', client[0]['senha'])
        with open('clientes.json', 'w') as file:
            json.dump(clientes, file)
        return jsonify({'message': 'Client updated'}), 200


@app.route('/clientes/<int:client_id>', methods=['DELETE'])
def delete_client(client_id):
    with open('clientes.json', 'r') as file:
        clientes = json.load(file)
        client = [client for client in clientes if client['id'] == client_id]
        if len(client) == 0:
            return jsonify({'message': 'Client not found'}), 404
        clientes.remove(client[0])
        with open('clientes.json', 'w') as file:
            json.dump(clientes, file)
        return jsonify({'message': 'Client deleted'}), 200


# TECNICOS
@app.route('/tecnicos', methods=['GET'])
def get_all_tecnicos():
    with open('tecnicos.json', 'r') as file:
        tecnicos = json.load(file)
        return jsonify(tecnicos), 200


@app.route('/tecnicos/<int:tecnico_id>', methods=['GET'])
def get_tecnico_by_id(tecnico_id):
    with open('tecnicos.json', 'r') as file:
        tecnicos = json.load(file)
        tecnico = [tecnico for tecnico in tecnicos if tecnico['id'] == tecnico_id]
        if len(tecnico) == 0:
            return jsonify({'message': 'Técnico not found'}), 404
        return jsonify(tecnico[0]), 200


@app.route('/tecnicos', methods=['POST'])
def create_tecnico():
    tecnico_data = request.get_json()
    try:
        with open('tecnicos.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []
    next_id = max([tecnico['id'] for tecnico in data]) + 1 if data else 1
    tecnico_data['id'] = next_id
    data.append(tecnico_data)
    with open('tecnicos.json', 'w') as f:
        json.dump(data, f)
    return jsonify({"message": "Técnico cadastrado com sucesso"})


@app.route('/tecnicos/<int:tecnico_id>', methods=['PUT'])
def update_tecnico(tecnico_id):
    with open('tecnicos.json', 'r') as file:
        tecnicos = json.load(file)
        tecnico = [tecnico for tecnico in tecnicos if tecnico['id'] == tecnico_id]
        if len(tecnico) == 0:
            return jsonify({'message': 'Técnico not found'}), 404
        tecnico[0]['nome'] = request.json.get('nome', tecnico[0]['nome'])
        tecnico[0]['email'] = request.json.get('email', tecnico[0]['email'])
        tecnico[0]['senha'] = request.json.get('senha', tecnico[0]['senha'])
        tecnico[0]['especialidade'] = request.json.get(
            'especialidade', tecnico[0]['especialidade'])
        with open('tecnicos.json', 'w') as file:
            json.dump(tecnicos, file)
        return jsonify({'message': 'Técnico updated'}), 200


@app.route('/tecnicos/int:tecnico_id', methods=['DELETE'])
def delete_tecnico(tecnico_id):
    with open('tecnicos.json', 'r') as file:
        tecnicos = json.load(file)
        tecnico = [tecnico for tecnico in tecnicos if tecnico['id'] == tecnico_id]
        if len(tecnico) == 0:
            return jsonify({'message': 'Técnico not found'}), 404
        tecnicos.remove(tecnico[0])
        with open('tecnicos.json', 'w') as file:
            json.dump(tecnicos, file)
        return jsonify({'message': 'Técnico deleted'}), 200

# PRODUTOS


@app.route('/produtos', methods=['GET'])
def get_all_products():
    with open('produtos.json', 'r') as file:
        produtos = json.load(file)
        return jsonify(produtos), 200


@app.route('/produtos/<int:product_id>', methods=['GET'])
def get_product_by_id(product_id):
    with open('produtos.json', 'r') as file:
        produtos = json.load(file)
        product = [product for product in produtos if product['id'] == product_id]
        if len(product) == 0:
            return jsonify({'message': 'Product not found'}), 404
        return jsonify(product[0]), 200


@app.route('/produtos', methods=['POST'])
def create_product():
    product_data = request.get_json()
    try:
        with open('produtos.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []
    next_id = max([product['id'] for product in data]) + 1 if data else 1
    product_data['id'] = next_id
    data.append(product_data)
    with open('produtos.json', 'w') as f:
        json.dump(data, f)
    return jsonify({"message": "Produto cadastrado com sucesso"})


@app.route('/produtos/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    with open('produtos.json', 'r') as file:
        produtos = json.load(file)
        product = [product for product in produtos if product['id'] == product_id]
        if len(product) == 0:
            return jsonify({'message': 'Product not found'}), 404
        product[0]['nome'] = request.json.get('nome', product[0]['nome'])
        product[0]['valor'] = request.json.get('valor', product[0]['valor'])
        product[0]['descricao'] = request.json.get(
            'descricao', product[0]['descricao'])
        product[0]['quantidade'] = request.json.get(
            'quantidade', product[0]['quantidade'])
        with open('produtos.json', 'w') as file:
            json.dump(produtos, file)
        return jsonify({'message': 'Product updated'}), 200


@app.route('/produtos/int:product_id', methods=['DELETE'])
def delete_product(product_id):
    with open('produtos.json', 'r') as file:
        produtos = json.load(file)
    product = [product for product in produtos if product['id'] == product_id]
    if len(product) == 0:
        return jsonify({'message': 'Product not found'}), 404
    produtos.remove(product[0])
    with open('produtos.json', 'w') as file:
        json.dump(produtos, file)
    return jsonify({'message': 'Product deleted'}), 200

# TIPOS DE SERVIÇOS


@app.route('/servicos', methods=['GET'])
def get_all_services():
    with open('servicos.json', 'r') as file:
        servicos = json.load(file)
        return jsonify(servicos), 200


@app.route('/servicos/<int:service_id>', methods=['GET'])
def get_service_by_id(service_id):
    with open('servicos.json', 'r') as file:
        servicos = json.load(file)
        service = [service for service in servicos if service['id'] == service_id]
        if len(service) == 0:
            return jsonify({'message': 'Service not found'}), 404
        return jsonify(service[0]), 200


@app.route('/servicos', methods=['POST'])
def create_service():
    service_data = request.get_json()
    try:
        with open('servicos.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []
    next_id = max([service['id'] for service in data]) + 1 if data else 1
    service_data['id'] = next_id
    data.append(service_data)
    with open('servicos.json', 'w') as f:
        json.dump(data, f)
    return jsonify({"message": "Serviço cadastrado com sucesso"})


@app.route('/servicos/<int:service_id>', methods=['PUT'])
def update_service(service_id):
    with open('servicos.json', 'r') as file:
        servicos = json.load(file)
        service = [service for service in servicos if service['id'] == service_id]
        if len(service) == 0:
            return jsonify({'message': 'Service not found'}), 404
        service[0]['nome'] = request.json.get('nome', service[0]['nome'])
        service[0]['valor'] = request.json.get('valor', service[0]['valor'])
        service[0]['descricao'] = request.json.get(
            'descricao', service[0]['descricao'])
        with open('servicos.json', 'w') as file:
            json.dump(servicos, file)
        return jsonify({'message': 'Service updated'}), 200


@app.route('/servicos/<int:service_id>', methods=['DELETE'])
def delete_service(service_id):
    with open('servicos.json', 'r') as file:
        servicos = json.load(file)
        service = [service for service in servicos if service['id'] == service_id]
        if len(service) == 0:
            return jsonify({'message': 'Service not found'}), 404
        servicos.remove(service[0])
        with open('servicos.json', 'w') as file:
            json.dump(servicos, file)
        return jsonify({'message': 'Service deleted'}), 200

# ORDENS DE SERVIÇOS


@app.route('/ordens', methods=['GET'])
def get_all_orders_services():
    with open('ordens.json', 'r') as file:
        ordens_servicos = json.load(file)
        return jsonify(ordens_servicos), 200


@app.route('/ordens/<int:order_service_id>', methods=['GET'])
def get_order_service_by_id(order_service_id):
    with open('ordens.json', 'r') as file:
        ordens_servicos = json.load(file)
        order_service = [
            order_service for order_service in ordens_servicos if order_service['id'] == order_service_id]
        if len(order_service) == 0:
            return jsonify({'message': 'Order Service not found'}), 404
        return jsonify(order_service[0]), 200


@app.route('/ordens', methods=['POST'])
def create_order_service():
    order_service_data = request.get_json()
    try:
        with open('ordens.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []
    next_id = max([order_service['id']
                  for order_service in data]) + 1 if data else 1
    order_service_data['id'] = next_id
    order_service_data['responseFiles'] = []
    order_service_data['responseText'] = ""
    data.append(order_service_data)
    with open('ordens.json', 'w') as f:
        json.dump(data, f)
    return jsonify({"message": "Ordem de Serviço cadastrada com sucesso"})


@app.route('/ordens/<int:ordem_id>', methods=['PUT'])
def update_ordem(ordem_id):
    with open('ordens.json', 'r') as file:
        ordens = json.load(file)
        ordem = [ordem for ordem in ordens if ordem['id'] == ordem_id]
        if len(ordem) == 0:
            return jsonify({'message': 'Ordem não encontrada'}), 404
        ordem[0]['nome'] = request.json.get('nome', ordem[0]['nome'])
        ordem[0]['valor'] = request.json.get('valor', ordem[0]['valor'])
        ordem[0]['descricao'] = request.json.get(
            'descricao', ordem[0]['descricao'])
        ordem[0]['descricao_problema'] = request.json.get(
            'descricao_problema', ordem[0]['descricao_problema'])
        ordem[0]['responseText'] = request.json.get(
            'responseText', ordem[0]['responseText'])
        ordem[0]['responseFiles'] = request.json.get(
            'responseFiles', ordem[0]['responseFiles'])
        with open('ordens.json', 'w') as file:
            json.dump(ordens, file)
        return jsonify({'message': 'Ordem atualizada'}), 200


@app.route('/ordens/<int:service_order_id>', methods=['DELETE'])
def delete_service_order(service_order_id):
    with open('ordens.json', 'r') as file:
        service_orders = json.load(file)
        service_order = [
            service_order for service_order in service_orders if service_order['id'] == service_order_id]
        if len(service_order) == 0:
            return jsonify({'message': 'Service order not found'}), 404
        service_orders.remove(service_order[0])
        with open('ordens.json', 'w') as file:
            json.dump(service_orders, file)
        return jsonify({'message': 'Service order deleted'}), 200

# LOGIN


@app.route('/login/cliente', methods=['POST'])
def client_login():
    user_data = request.get_json()
    email = user_data.get('email')
    senha = user_data.get('senha')

    with open('clientes.json', 'r') as file:
        clientes = json.load(file)
        client = [client for client in clientes if client['email']
                  == email and client['senha'] == senha]
        if len(client) == 0:
            return jsonify({'message': 'Login failed'}), 401
        client = client[0]
        return jsonify({'message': 'Login successful', 'id_cliente': client['id']}), 200


@app.route('/login/tecnico', methods=['POST'])
def tecnico_login():
    user_data = request.get_json()
    email = user_data.get('email')
    senha = user_data.get('senha')

    with open('tecnicos.json', 'r') as file:
        tecnicos = json.load(file)
        tecnico = [tecnico for tecnico in tecnicos if tecnico['email']
                   == email and tecnico['senha'] == senha]
        if len(tecnico) == 0:
            return jsonify({'message': 'Login failed'}), 401
        tecnico = tecnico[0]
        return jsonify({'message': 'Login successful', 'id_tecnico': tecnico['id']}), 200


# APP ###################################################################
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
