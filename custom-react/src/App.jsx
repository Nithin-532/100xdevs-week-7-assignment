const anchorElement = {
  type: 'a',
  attributes: {
    href: 'https://google.com',
    target: '_blank',
  },
  innerHtml: 'Click Me'
}

const generateHtml = (element) => {
  const { type, attributes, innerHtml } = element;

  const htmlAttributes = Object.keys(attributes).map(val => `${val} = "${attributes[val]}"`).join(" ");

  return `<${type} ${htmlAttributes}>${innerHtml}</${type}>`
}

const renderHtml = (element, id) => {
  const generatedHtml = generateHtml(element);
  const selector = document.querySelector(id);
  selector.innerHTML = generatedHtml;
}

function App() {
  return (
    <>
      {renderHtml(anchorElement, "#root")}
    </>
  )
}

export default App
