import React from 'react';
import { Section, Dish } from './menuitems.ts';
import style from './menu.module.css';

type MenuLayoutProps = {
  sections: Section[];
};
type MenuSectionProps = {
  section: Section;
}
type DishProps = {
  dish: Dish;
}

function splitEvenOdd<T>(arr: T[]): [T[], T[]] {
  const even: T[] = [];
  const odd: T[] = [];
  arr.forEach((item, i) => {
    (i % 2 === 0 ? even : odd).push(item);
  });
  return [even, odd];
}

const DishRow: React.FC<DishProps> = ({ dish }) => {
  return (
    <>
      <div className={style.dishName}>{dish.name}</div>
      {for (const [key, value] of dish.prices(portion)){
        
      }}
    </>
  )
}

const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  return (
    <div className={style.section}>
      <div className={style.sectionHeader}>Test Course</div>

      {section.portionSizes ? (
        section.portionSizes?.map((size: string, index) => (
          <div className={index==0 ? style.portionSizesStart : ''}>
            {size}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

const MenuColumn: React.FC<MenuLayoutProps> = ({ sections }) => {
  return (
    <div className={style.column}>
      {sections.map((section) => (
        <MenuSection section={section}/>
      ))}
    </div>
  )
}

export const MenuLayout: React.FC<MenuLayoutProps> = ({ sections }) => {
  const [evenSections, oddSections] = splitEvenOdd(sections);

  return (
    <>
      <div className={style.layout}>
        <MenuColumn sections={ evenSections }/>
        <MenuColumn sections={ oddSections }/>
      </div>
    </>
  );
};
