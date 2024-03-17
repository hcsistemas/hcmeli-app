import styles from "./page.module.scss";
import SearchForm from "@/components/searchForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchForm />
    </main>
  );
}
