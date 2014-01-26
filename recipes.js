var recipes = [
    {
        name: 'Пржени лепчиња',
        cooking_time_minutes: 15,
        ingredients: [
            { name: 'леб', quantity: 6, quantity_type: 'кришки', alternatives: [], mandatory: true },
            { name: 'јајца', quantity: 3, quantity_type: null, alternatives: [], mandatory: true },
            { name: 'зејтин', quantity: 50, quantity_type: 'милилитри', alternatives: [], mandatory: true },
            { name: 'сол', quantity: 1, quantity_type: 'кафена лажичка', alternatives: [], mandatory: false },
            { name: 'млеко', quantity: 100, quantity_type: 'милилитри', alternatives: [], mandatory: false }
        ],
        description: 'Во тава се става малку зејтин да се загрее. Во чинија се матат јајцата и се додава сол и малку млеко. Лебот се сече на парчиња. Кога зејтинот ќе се загрее, лепчињата се натопуваат во јајцата и се ставаат во тавчето да се пржат. Кога ќе добијат кафена боја од двете страни, се вадат од тавчето. Лепчињата може да се јадат со сирење, кашкавал, шунка или дури и шеќер.',
    },
];

module.exports = recipes;