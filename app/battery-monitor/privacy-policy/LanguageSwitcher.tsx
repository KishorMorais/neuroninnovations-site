import styles from "./privacy-policy.module.css";

type Props = {
  currentLanguage: "en" | "zh";
};

export default function LanguageSwitcher({
  currentLanguage,
}: Props) {
  return (
    <div
      className={styles.languageSwitcher}
      aria-label="Language"
    >
      <a
        href="/battery-monitor/privacy-policy"
        className={
          currentLanguage === "en"
            ? styles.languageActive
            : styles.languageOption
        }
      >
        English
      </a>

      <a
        href="/battery-monitor/privacy-policy/zh"
        className={
          currentLanguage === "zh"
            ? styles.languageActive
            : styles.languageOption
        }
      >
        中文
      </a>
    </div>
  );
}