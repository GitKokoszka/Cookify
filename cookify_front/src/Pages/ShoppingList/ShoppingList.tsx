import React, { useState, useEffect } from "react";
import Button from "../../shared/components/buttons/Button";
import ShoppingListItem from "../../shared/components/shoppingList/ShoppingListItem";
import ShoppingListObject from "../../shared/components/shoppingList/ShoppingListObject";
import { ButtonVariant } from "../../shared/enums/ButtonVariant";
import styles from "./ShoppingList.module.scss";

interface ShoppingListObject {
  object: { name: string; items: string[] };
}

const ShoppingList: React.FC = () => {
  const [shoppingList, setShoppingList] = useState<string[]>(["chipsy", "cola", "monsterek", "paluszki"]);
  const [shoppingListObjects, setShoppingListObjects] = useState<ShoppingListObject[]>([
    { object: { name: "Frytki ze schabowym", items: [] } },
    {
      object: {
        name: "Jajecznica",
        items: ["4 jajka", "sól", "pieprz", "szczypiorek"],
      },
    },
    {
      object: {
        name: "Frytki z kurczakiem",
        items: ["1 kg kurczaka", "sól", "pieprz", "przyprawa do kurczaka", "folia aluminiowa"],
      },
    },
  ]);

  return (
    <div className={styles.componentContainer}>
      <div className={styles.listContainer}>
        <div className={styles.shareButton}>{"--->"}Udostępnij</div>
        <ul>
          {shoppingList.map((item, index) => (
            <li>
              <ShoppingListItem
                name={item}
                key={item}
                onDelete={() => setShoppingList(shoppingList.filter((x, index2) => index2 !== index))}
              />
            </li>
          ))}
        </ul>
        <Button
          className={styles.addItemButton}
          onClick={() => setShoppingList([...shoppingList, "itemek"])}
          text={"(+) Dodaj element"}
          variant={ButtonVariant.Blue}
        />
        {shoppingListObjects.map((item, index) => (
          <ShoppingListObject
            onDelete={() => setShoppingListObjects(shoppingListObjects.filter((x, index2) => index2 !== index))}
            items={item.object.items}
            header={item.object.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;