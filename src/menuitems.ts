export type PortionSize = 'Small' | 'Large' | string;

export type Dish = {
  name: string;
  prices: { [portion: string]: string };
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
];