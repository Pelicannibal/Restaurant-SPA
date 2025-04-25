export type PortionSize = 'Small' | 'Large' | string;

export type Dish = {
  name: string;
  prices: { [portion: PortionSize]: string };
};

export type SampleImage = {
  name: string;
  image: string;
}

export type Section = {
  course: string;
  portionSizes?: PortionSize[];
  dishes: Dish[];
  sample?: SampleImage;
};

export const exampleSection: Section[] = [
  {
    course: 'Appetizers',
    portionSizes: ['Standard'],
    dishes: [
      {
        name: 'Crispy Spring Rolls',
        prices: {
          Standard: '$6.99',
          Blank: '',
        },
      },
      {
        name: 'Garlic Parmesan Wings',
        prices: {
          Standard: '$8.49',
          Blank: '',
        },
      },
      {
        name: 'Bruschetta Trio',
        prices: {
          Standard: '$7.29',
          Blank: '',
        },
      },
      {
        name: 'Spicy Calamari',
        prices: {
          Standard: '$9.95',
          Blank: '',
        },
      },
      {
        name: 'Stuffed Mushrooms',
        prices: {
          Standard: '$7.99',
          Blank: '',
        },
      },
    ],
    sample: {
      name: 'Bruschetta',
      image: '/Bruschetta.jpg',
    },
  },
  {
    course: 'Main Courses',
    portionSizes: ['Small', 'Large'],
    dishes: [
      {
        name: 'Chicken Curry',
        prices: {
          Small: '$8.99',
          Large: '$12.99',
        },
      },
      {
        name: 'Grilled Salmon',
        prices: {
          Small: '$7.99',
          Large: '',
        }
      },
      {
        name: 'Beef Rendang',
        prices: {
          Small: '$9.99',
          Large: '$13.99',
        },
      },
    ],
    sample: {
      name: 'Grilled Salmon',
      image: '/salmon.jpg',
    },
  },
  {
    course: 'Drinks',
    portionSizes: ['0.5l', '2l'],
    dishes: [
      {
        name: 'Sparkling Water',
        prices: {
          Small: '$2.50',
          Large: '$6.99',
        },
      },
      {
        name: 'Fresh Orange Juice',
        prices: {
          Small: '$3.99',
          Large: '',
        },
      },
      {
        name: 'Iced Coffee',
        prices: {
          Small: '$4.25',
          Large: '',
        },
      },
      {
        name: 'Matcha Latte',
        prices: {
          Small: '$4.75',
          Large: '',
        },
      },
      {
        name: 'Classic Lemonade',
        prices: {
          Small: '$3.49',
          Large: '$7.49',
        },
      },
    ],
  },
  {
    course: 'Desserts',
    portionSizes: ['Small', '2 Share'],
    dishes: [
      {
        name: 'Chocolate Lava Cake',
        prices: {
          Small: '$5.99',
          Share: '$10.49',
        },
      },
      {
        name: 'Tiramisu',
        prices: {
          Small: '$6.49',
          Share: '$9.99',
        },
      },
      {
        name: 'Creme Brulee',
        prices: {
          Small: '$6.25',
          Share: '',
        },
      },
      {
        name: 'Assorted Gelato',
        prices: {
          Small: '$4.99',
          Share: '',
        },
      },
    ],
    sample: {
      name: 'Tiramisu',
      image: '/tiramisu.jpg',
    },
  }
];