import {fireEvent, render, screen} from '@testing-library/react';
import {CHome} from "./components/CHome";
import {CFormSuccess} from "./components/CFormSuccess";
import App from "./App";
import userEvent from "@testing-library/user-event";
import ShallowRenderer from 'react-test-renderer/shallow';
import {CContact} from "./components/CContact";
import Enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {CRoutes} from "./components/CRoutes";
import CDisplayContents from "./components/CDisplayContents";
import {CMaterials} from "./components/CMaterials";

Enzyme.configure({ adapter: new Adapter() });

test('CHome zawiera tekst', () => {
  render(<CHome />);
  const linkElement = screen.getByText("Od wielu lat zajmujemy się wszelkiego rodzaju metalami. Chcieliśmy zaprezentować film, który przybliży Ci, o czym jest nasza strona.");
  expect(linkElement).toBeInTheDocument();
});
test('następuje zmiana tekstu po wysłaniu formularza z opóźnieniem', () => {
  jest.useFakeTimers();
  render(<CFormSuccess/>);
  expect(setTimeout).toHaveBeenCalledTimes(1);
});
test('następuje zmiana tekstu po kliknięciu przycisku', () => {
  const {getByTestId} = render(<CFormSuccess name="Jan" surname="Kowalski" email="jan.kowalski@gmail.com"/>);
  const button = getByTestId("Button");
  const result = getByTestId("Result");
  expect(result).toHaveTextContent('');
  fireEvent.click(button);
  expect(result).toHaveTextContent("Dane zostały poprawnie wysłane. Możesz opuścić stronę.");
});
test('następuje przekierowanie po kliknięciu linku', () => {
  render(<App/>);
  const leftClick = {button: 0};
  userEvent.click(screen.getByText("Kontakt"), leftClick);
  expect(screen.getByText("W celu skontaktowania się z naszą firmą wypełnij poniższe dane kontaktowe")).toBeInTheDocument();
});
test('snapshot test', () => {
  const renderer = new ShallowRenderer();
   renderer.render(<App />);
   const result = renderer.getRenderOutput();
   expect(result).toMatchSnapshot();
});
test('logo poprawnie przekierowuje na stronę główną', () => {
  render(<App/>);
  const leftClick = {button: 0};
  userEvent.click(screen.getByText("Kontakt"), leftClick);
  expect(screen.getByText("W celu skontaktowania się z naszą firmą wypełnij poniższe dane kontaktowe")).toBeInTheDocument();
  userEvent.click(screen.queryByTestId("homeRouteLogo"), leftClick);
  expect(screen.getByText("Od wielu lat zajmujemy się wszelkiego rodzaju metalami. Chcieliśmy zaprezentować film, który przybliży Ci, o czym jest nasza strona.")).toBeInTheDocument();
});
test('dane są ładowane z formularza do states poprawnie', () => {
  const component = mount(<CContact/>);
  const input1 = component.find('input').at(0);
  const input2 = component.find('input').at(1);
  const input3 = component.find('input').at(2);
  input1.instance().value = 'Jan';
  input1.simulate('change');
  input2.instance().value = 'Kowalski';
  input2.simulate('change');
  input3.instance().value = 'jan.kowalski@gmail.com';
  input3.simulate('change');
  expect(component.state().name).toEqual('Jan');
  expect(component.state().surname).toEqual('Kowalski');
  expect(component.state().email).toEqual('jan.kowalski@gmail.com');
});
test('formularz się wysyła i wyświetla inny komponent z prawidłowymi danymi', async () => {
  const component = mount(<CContact/>);
  component.find('input').at(0).instance().value = 'Paweł';
  component.find('input').at(1).instance().value = 'Nowak';
  component.find('input').at(2).instance().value = 'pawel.nowak@gmail.com';
  component.find('form').simulate('submit');
  expect(component.find('h1').first().text()).toBe("Dziękujemy za dane " + component.state().name + " " + component.state().surname + "!");
});
test('zawiera dane do nawigacji pomiędzy podstronami', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.contains(<CRoutes/>)).toBe(true);
});
jest.mock('./components/CDisplayContents')
test('komponent wywołał konstruktor od komponentu, z którego dziedziczy', () => {
  const comp = new CMaterials(undefined);
  expect(CDisplayContents).toHaveBeenCalledTimes(1);
});