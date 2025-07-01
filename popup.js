document.addEventListener('DOMContentLoaded', () => {
    const cpfResult = document.getElementById('cpf-result');
    const cnpjResult = document.getElementById('cnpj-result');
    const uuidResult = document.getElementById('uuid-result');

    const cpfFormatted = document.getElementById('cpf-formatted');
    const cnpjFormatted = document.getElementById('cnpj-formatted');
    const uuidUppercase = document.getElementById('uuid-uppercase');

    const generateCpfBtn = document.getElementById('generate-cpf');
    const generateCnpjBtn = document.getElementById('generate-cnpj');
    const generateUuidBtn = document.getElementById('generate-uuid');

    const copyCpfBtn = document.getElementById('copy-cpf');
    const copyCnpjBtn = document.getElementById('copy-cnpj');
    const copyUuidBtn = document.getElementById('copy-uuid');

    const statusMessage = document.getElementById('status-message');

    function generateCPF(formatted = true) {
        const cpfArray = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

        let sum = cpfArray.reduce((acc, digit, idx) => acc + digit * (10 - idx), 0);
        let firstCheckDigit = 11 - (sum % 11);
        if (firstCheckDigit > 9) firstCheckDigit = 0;

        cpfArray.push(firstCheckDigit);

        sum = cpfArray.reduce((acc, digit, idx) => acc + digit * (11 - idx), 0);
        let secondCheckDigit = 11 - (sum % 11);
        if (secondCheckDigit > 9) secondCheckDigit = 0;

        cpfArray.push(secondCheckDigit);

        const cpfString = cpfArray.join('');

        if (formatted) {
            return `${cpfString.slice(0, 3)}.${cpfString.slice(3, 6)}.${cpfString.slice(6, 9)}-${cpfString.slice(9)}`;
        }

        return cpfString;
    }

    function generateCNPJ(formatted = true) {
        const cnpjArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));

        cnpjArray.push(0, 0, 0, 1);

        const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = cnpjArray.reduce((acc, digit, idx) => acc + digit * weights1[idx], 0);
        let firstCheckDigit = 11 - (sum % 11);
        if (firstCheckDigit > 9) firstCheckDigit = 0;

        cnpjArray.push(firstCheckDigit);

        const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        sum = cnpjArray.reduce((acc, digit, idx) => acc + digit * weights2[idx], 0);
        let secondCheckDigit = 11 - (sum % 11);
        if (secondCheckDigit > 9) secondCheckDigit = 0;

        cnpjArray.push(secondCheckDigit);

        const cnpjString = cnpjArray.join('');

        if (formatted) {
            return `${cnpjString.slice(0, 2)}.${cnpjString.slice(2, 5)}.${cnpjString.slice(5, 8)}/${cnpjString.slice(8, 12)}-${cnpjString.slice(12)}`;
        }

        return cnpjString;
    }

    function generateUUID(uppercase = false) {
        const hexDigits = '0123456789abcdef';
        let uuid = '';

        for (let i = 0; i < 36; i++) {
            if (i === 8 || i === 13 || i === 18 || i === 23) {
                uuid += '-';
            } else if (i === 14) {
                uuid += '4';
            } else if (i === 19) {
                uuid += hexDigits[(Math.random() * 4) | 8];
            } else {
                uuid += hexDigits[Math.floor(Math.random() * 16)];
            }
        }

        return uppercase ? uuid.toUpperCase() : uuid;
    }

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    function showStatusMessage(message, duration = 2000) {
        statusMessage.textContent = message;
        statusMessage.style.opacity = '1';

        setTimeout(() => {
            statusMessage.style.opacity = '0';
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 300);
        }, duration);
    }

    const generateAndShowCPF = () => {
        const formatted = cpfFormatted.checked;
        cpfResult.value = generateCPF(formatted);
    };

    const generateAndShowCNPJ = () => {
        const formatted = cnpjFormatted.checked;
        cnpjResult.value = generateCNPJ(formatted);
    };

    const generateAndShowUUID = () => {
        const uppercase = uuidUppercase.checked;
        uuidResult.value = generateUUID(uppercase);
    };

    const copyAndShowMessage = async (input, type) => {
        try {
            await copyToClipboard(input.value);
            showStatusMessage(`${type} copiado! 🎉`);
        } catch (error) {
            showStatusMessage('Erro ao copiar ❌');
        }
    };

    generateCpfBtn.addEventListener('click', generateAndShowCPF);
    generateCnpjBtn.addEventListener('click', generateAndShowCNPJ);
    generateUuidBtn.addEventListener('click', generateAndShowUUID);

    copyCpfBtn.addEventListener('click', () => copyAndShowMessage(cpfResult, 'CPF'));
    copyCnpjBtn.addEventListener('click', () => copyAndShowMessage(cnpjResult, 'CNPJ'));
    copyUuidBtn.addEventListener('click', () => copyAndShowMessage(uuidResult, 'UUID'));

    cpfFormatted.addEventListener('change', generateAndShowCPF);
    cnpjFormatted.addEventListener('change', generateAndShowCNPJ);
    uuidUppercase.addEventListener('change', generateAndShowUUID);

    generateAndShowCPF();
    generateAndShowCNPJ();
    generateAndShowUUID();
});