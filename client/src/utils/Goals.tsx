export const Goals = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    amount: index + 1,
    paymentDate: null,
    userPayer: null
}));