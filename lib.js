function createElement(parent, type = 'div', classes = []) {
    const el = document.createElement(type);

    classes.forEach(className => el.classList.add(className));
    parent.appendChild(el);

    return el;
}

function initRow(size) {
    const row = createElement(document.body, 'div', ['row']);
    const cells = [];

    for (let i = 0; i < size; i++) {
        cells.push(createElement(row, 'div', ['cell']));
    }

    return cells;
}

function initGrid(x, y) {
    const rows = [];

    for (let i = 0; i < y; i++) {
        rows.push(initRow(x));
    }

    return rows;
}