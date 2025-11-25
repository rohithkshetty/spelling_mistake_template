export default function Navbar() {
  return (
    <div
      dangerouslySetInnerHTML={ { __html: `<nav> <ul> <li><a href="#introduction">Introducton</a></li> <li><a href="#common-mistakes">Comon Mistakes</a></li> <li><a href="#categories">Catagories</a></li> <li><a href="#examples">Exampels</a></li> <li><a href="#tips">Helpfull Tips</a></li> <li><a href="#resources">Resourses</a></li> </ul> </nav>` } }
    />
  );
}
