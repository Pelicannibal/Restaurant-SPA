import React from 'react';
import { Section, PortionSize } from '../menuitems.ts';
import style from './menu.module.css';

type MenuLayoutProps = {
  sections: Section[];
};
type MenuSectionProps = {
  section: Section;
}
type DishProps = {
  name: string;
  prices: { [portion: PortionSize]: string };
}

function splitEvenOdd<T>(arr: T[]): [T[], T[]] {
  const even: T[] = [];
  const odd: T[] = [];
  arr.forEach((item, i) => {
    (i % 2 === 0 ? even : odd).push(item);
  });
  return [even, odd];
}

const DishRow: React.FC<DishProps> = ({ name, prices }) => {
  return (
    <>
      <div key={name} className={style.dishName}>{name}</div>
      {Object.entries(prices).map(([portion, price]) => (
        <div key={portion} className={style.price}>
          {price}
        </div>
      ))}
    </>
  )
}

const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  return (
    <div className={style.section}>
      <div key={section.course} className={style.sectionHeader}>{section.course}</div>
      
      {section.sample?.image && (
        <img src={section.sample?.image} className={style.dishImage}/>
      )}
      
      <div/>
      {section.portionSizes ? (
        <>
          {section.portionSizes?.map((size: string) => (
            <div key={size} className={style.dishSizes}>
              {size}
            </div>
          ))}

          {section.portionSizes?.length === 1 && (
            <div/>
          )}
        </>
      ) : (
        <>
          <div/>
          <div/>
        </>
      )}

      {section.dishes.map((dish) => (
        <DishRow key={dish.name} name={dish.name} prices={dish.prices}/>
      ))}
    </div>
  )
}

const MenuColumn: React.FC<MenuLayoutProps> = ({ sections }) => {
  return (
    <div /*className={style.column} <- uncomment if there are formatting issues*/>
      {sections.map((section) => (
        <MenuSection section={section} key={section.course}/>
      ))}
    </div>
  )
}

export const MenuLayout: React.FC<MenuLayoutProps> = ({ sections }) => {
  const [evenSections, oddSections] = splitEvenOdd(sections);

  return (
    <>
      <div className={style.layout}>
        <MenuColumn sections={evenSections} key={"evenColumn"}/>
        <MenuColumn sections={oddSections} key={"oddColumn"}/>
      </div>
    </>
  );
};
