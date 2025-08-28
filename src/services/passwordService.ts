export default function generatePass(): string {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()-_=+[]{}|;:,.<>?/';
    const passwordLength = 12;

    const allChars = upper + lower + numbers + special;
    let password = '';

    // Garante pelo menos um de cada tipo
    password += upper.charAt(Math.floor(Math.random() * upper.length));
    password += lower.charAt(Math.floor(Math.random() * lower.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += special.charAt(Math.floor(Math.random() * special.length));

    // Completa com caracteres aleatórios
    for (let i = password.length; i < passwordLength; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Embaralha a senha para não deixar padrão previsível
    return password.split('').sort(() => 0.5 - Math.random()).join('');
}