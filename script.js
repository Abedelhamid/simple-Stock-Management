let stockItems = [];

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName && itemQuantity) {
        const item = {
            id: new Date().getTime(),
            name: itemName,
            quantity: parseInt(itemQuantity)
        };
        stockItems.push(item);
        renderTable();
        document.getElementById('item-name').value = '';
        document.getElementById('item-quantity').value = '';
    } else {
        alert('Please enter both item name and quantity');
    }
}

function renderTable() {
    const table = document.getElementById('stock-table');
    table.innerHTML = '';
    stockItems.forEach(item => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = item.name;
        cell2.textContent = item.quantity;
        cell3.innerHTML = `
            <div class="btn-group" role="group">
                <button class="btn btn-warning" onclick="editItem(${item.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteItem(${item.id})">Delete</button>
            </div>
        `;
    });
}

function deleteItem(id) {
    stockItems = stockItems.filter(item => item.id !== id);
    renderTable();
}

function editItem(id) {
    const item = stockItems.find(item => item.id === id);
    document.getElementById('item-name').value = item.name;
    document.getElementById('item-quantity').value = item.quantity;
    deleteItem(id);
}

function searchItems() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const filteredItems = stockItems.filter(item => item.name.toLowerCase().includes(searchValue));
    const table = document.getElementById('stock-table');
    table.innerHTML = '';
    filteredItems.forEach(item => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = item.name;
        cell2.textContent = item.quantity;
        cell3.innerHTML = `
            <div class="btn-group" role="group">
                <button class="btn btn-warning" onclick="editItem(${item.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteItem(${item.id})">Delete</button>
            </div>
        `;
    });
}
