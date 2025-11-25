export default function Header() {
  return (
    <div
      dangerouslySetInnerHTML={ { __html: `<header> <h1>Comonly Mispelled English Words</h1> <div class="subtitle">A Comprehensive Guide to Improoving Your Writting</div> </header>` } }
    />
  );
}
