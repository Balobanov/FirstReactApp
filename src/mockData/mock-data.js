import uuid from 'node-uuid';

const Data = [
    {
        id: uuid(),
        name: "Denis",
        age: 24,
        payments: [
            {
                title: "Internet",
                amount: 100,
                data: new Date()
            },

            {
                title: "Food",
                amount: 30,
                data: new Date()
            },

            {
                title: "Flat",
                amount: 1000,
                data: new Date()
            }
        ]
    },

    {
        id: uuid(),
        name: "Evgeniy",
        age: 29,
        payments: [
            {
                title: "Internet",
                amount: 100,
                data: new Date()
            },

            {
                title: "Food",
                amount: 500,
                data: new Date()
            },

            {
                title: "Flat",
                amount: 3000,
                data: new Date()
            },

            {
                title: "Mend",
                amount: 5000,
                data: new Date()
            }
        ]
    }
];

export default Data;