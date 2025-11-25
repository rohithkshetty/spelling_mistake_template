export default function Footer() {
  return (
    <div
      dangerouslySetInnerHTML={ { __html: `<footer> <p>&copy; 2025 Spelling Education Resources. All rights reserved.</p> <p>This page is intended for educational purposes and contains intentional spelling and grammer errors for testing.</p> <p>For more information, please contact us at info@spellingtest.com or visit our website.</p> </footer>` } }
    />
  );
}
