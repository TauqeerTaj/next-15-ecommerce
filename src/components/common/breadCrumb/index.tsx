import Link from "next/link";
//Components
import { BreadCrumbsInterface } from "@/constant/breadCrumbsInterface";
//Redux
import { useAppDispatch } from "@/lib/hooks";
import { selectMenu } from "@/reduxToolkit/selectedMenuSlice";
//Styles
import Styles from "@/styles/breadCrumbs.module.css";

const BreadCrumbs: React.FC<BreadCrumbsInterface> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ul className={Styles.list}>
        {navigation.map((item, i) => (
          <li
            key={i}
            className={
              i === navigation.length - 1 ? Styles.active : Styles.disabled
            }
          >
            <Link
              href={item.path}
              onClick={() => dispatch(selectMenu(item.step))}
            >{`${item.step} ${i !== navigation.length - 1 ? "/ " : ""}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BreadCrumbs;
