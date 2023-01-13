export const SpendData = [
    {
        what: 'candy',
        where: 'Dollarama',
        cost: '1.25',
        when: '2022/12/25',
    },
    {
        what: 'chips',
        where: 'Dollarama',
        cost: '1',
        when: '2022/12/25',
    },
];



export const addSpend = (spend) => {
    SpendData.push(spend);
  }


