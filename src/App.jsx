import './App.css';
import Header from './components/Header.jsx';
import Title from './components/Title.jsx';
import InputBox from './components/InputBox.jsx';


function App() {

  return (
    <>
      {/* I'm creating this for a signup page, I might create another file for it separately */}
      <Header />

      <main>

        <Title
          title="Let's get you started"
          subtitle="Become a MediaHubber today and Keep track of all your Media consumption"
        />

        <InputBox
          type="text"
          placeholder="Full Name"
          icon="person"
        />

        <InputBox
          type="email"
          placeholder="Email"
          icon="mail"
        />

        <InputBox
          type="password"
          placeholder="Password"
          icon="visibility_off"
        />

        
      </main>

    </>
  )
}

export default App
