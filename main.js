const fs = require('fs');

// Функція для читання JSON файлу
function readJSONFile(filename) {
    const rawData = fs.readFileSync(filename, 'utf8'); // Вказуємо 'utf8' кодування
    return JSON.parse(rawData);
}

// Функція для запису результатів у файл
function writeToFile(filename, data) {
    fs.writeFileSync(filename, data);
}

// Головна функція, яка виконує завдання
function processBankData() {
    try {
        // Читаємо дані з JSON файлу
        const data = readJSONFile('data.json');

        // Фільтруємо дані згідно умови "parent === 'BS3_BanksLiab'"
        const filteredData = data.filter(item => item.parent === 'BS3_BanksLiab');

        // Генеруємо рядки для виводу з англійським перекладом (якщо доступний)
        const outputLines = filteredData.map(item => {
            return `${item.txten}:${item.value}`;
        });

        // Записуємо результати у файл output.txt
        writeToFile('output.txt', outputLines.join('\n'));

        console.log('Результати успішно записані у файл output.txt');
    } catch (error) {
        console.error('Помилка обробки даних:', error);
    }
}

// Викликаємо головну функцію
processBankData();
