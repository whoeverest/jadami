var recipes = [
    {
        name: 'Пржени лепчиња',
        cooking_time_minutes: 15,
        ingredients: [
            { name: 'леб', quantity: 6, quantity_type: 'кришки', alternatives: [], mandatory: true },
            { name: 'јајца', quantity: 3, quantity_type: '', alternatives: [], mandatory: true },
            { name: 'масло за готвење', quantity: 50, quantity_type: 'ml', alternatives: [], mandatory: true },
            { name: 'сол', quantity: 1, quantity_type: 'кафена лажичка', alternatives: [], mandatory: false },
            { name: 'млеко', quantity: 100, quantity_type: 'ml', alternatives: [], mandatory: false }
        ],
        description: 'Во тава се става малку зејтин да се загрее. Во чинија се матат јајцата и се додава сол и малку млеко. Лебот се сече на парчиња. Кога зејтинот ќе се загрее, лепчињата се натопуваат во јајцата и се ставаат во тавчето да се пржат. Кога ќе добијат кафена боја од двете страни, се вадат од тавчето. Лепчињата може да се јадат со сирење, кашкавал, шунка или дури и шеќер.',
    },
    {
        name: 'Палачинки',
        cooking_time_minutes: 45,
        ingredients: [
            { name: 'јајца', quantity: 3, quantity_type: '', alternatives: [], mandatory: false },
            { name: 'брашно', quantity: 250, quantity_type: 'gr', alternatives: [], mandatory: true },
            { name: 'млеко', quantity: 350, quantity_type: 'ml', alternatives: [], mandatory: false },
            { name: 'минерална вода', quantity: 200, quantity_type: 'ml', alternatives: ['обична вода'], mandatory: true },
            { name: 'сол', quantity: 1, quantity_type: 'кафена лажичка', alternatives: [], mandatory: false },
            { name: 'масло за готвење', quantity: 1, quantity_type: 'кафена лажичка', alternatives: [], mandatory: true }
        ],
        description: 'Сите состојки се ставаат во сад и се мешаат со миксер така што ќе нема грутки од брашното. На рингла се става тавче со малку зејтин и кога ќе се загрее со кутлача се додава од смесата. Зејтин се додава за секоја следна палачинка.',
    }
];

module.exports = recipes;