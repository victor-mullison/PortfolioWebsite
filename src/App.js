import React, { useState } from 'react';
import './App.css';
import reactLogo from './pictures/reactjs.png';
import phoneLogo from './pictures/phone.png';
import mailLogo from './pictures/mail.png';


// Global fonts and styles for site
const headerFont = {
  color: 'white',
  fontFamily: 'Verdana',
  fontSize: '30pt',
  textAlign: 'center',
  paddingTop: '20px',
  marginBottom: '0px'
};

const bodyFont = {
  color: 'rgb(204, 204, 204)',
  fontFamily: 'Verdana',
  fontSize: '15pt',
  textAlign: 'center'
}

// darkblue = '#0e1525'
// lessdarkblue = '#192748'
// lightblue = '#27375b'
// -------------------- MAIN ------------------------ //
// Each significant section is broken into its own component as all will have different functionalities and styles.
// Each is also ID'ed to allow for the headerbuttons to work easily
const PortfolioSite = () => {
  return (
    <div>
      <HeaderBar />
      <ToTopButton />
      <div>
        <div id="AboutMe"><AboutMe /></div>
        <div id="Skills"><Skills /></div>
        <div id="Projects"><Projects /></div>
        <div id="CodeSamples"><CodeSamples /></div>
        <div id="Education"><Education /></div>
        <div id="WorkExperience"><WorkExperience /></div>
        <div id="ContactMe"><ContactMe /></div>

        <h1 style={{ ...headerFont, marginBottom: '10%' }}>- Thanks for visiting my site! - </h1>
      </div>
    </div>
  );
};
// ------------------- MAIN END ---------------------//






// HEADER
const HeaderBar = () => {
  return (
    <div>
      <div className='flexbox-row'>
        <HeaderButton text="About Me" sectionID="AboutMe" />
        <HeaderButton text="Skills" sectionID="Skills" />
        <HeaderButton text="Projects" sectionID="Projects" />
        <HeaderButton text="Code Samples" sectionID="CodeSamples" />
        <HeaderButton text="Education" sectionID="Education" />
        <HeaderButton text="Work Experience" sectionID="WorkExperience" />
        <HeaderButton text="Contact Me!" sectionID="ContactMe" />
        <Corner />
      </div>


    </div>
  );
};

const HeaderButton = ({ text, sectionID }) => {



  // SectionID to translate to is determined by prop for reusability
  const handleClick = () => {
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID ${sectionID} not found.`);
    }
  }

  return (
    <div className="bounding-rect" onClick={handleClick} style={{ fontSize: '1.5em' }}>{text}</div>
  );
};

// Standalone component for the top right corner element with profile pic, phone and gmail buttons, and "made with React" tag
const Corner = () => {

  const handleClick = () => { // Scrolls to contact section on either button press
    const section = document.getElementById("ContactMe");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className='darkblue-border flexbox-row' style={{ height: '80px', width: '23vw', borderWidth: '6px', justifyContent: 'space-evenly', alignItems: 'center' }} onClick={handleClick}>
      <img src={phoneLogo} alt='Phone' width='60px' height='60px'></img>
      <img src={mailLogo} alt='Mail' width='60px' height='60px'></img>
      <img src={reactLogo} alt='Made with React' height='60px'></img>
    </div>
  );
};


const ToTopButton = () => {
  const toTop = () => {
    const section = document.documentElement
    section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button className='darkblue-border totop' onClick={toTop} style={{ ...headerFont, bottom: '1vw', left: '1vw', width: '5vw', height: '5vw', zIndex: '1000', position: 'fixed', borderRadius: '100%' }}>
      ^
    </button>
  );
}

// HEADER END



// ABOUT ME
const AboutMe = () => {
  return (
    <div style={{ marginTop: '100px', marginBottom: '100px', marginLeft: '400px', marginRight: '400px' }}>
      <h2 style={{ ...headerFont, fontSize: '27px', paddingTop: '0px' }}> Hi, I'm Victor Mullison.</h2>
      <hr></hr>
      <p style={{ ...bodyFont, marginTop: '0px', textWrap: 'pretty' }}>Thanks for checking out my website! I thoroughly enjoy learning new things, so I decided that my best bet to be successful in the computer science job market is to learn everything all at once! If my motivation and curiosity sound right for you, I hope you'll contact me in one of the ways provided by this website. Thank you! </p>
    </div>
  );
};
// ABOUT ME END



// PROJECTS START

// Main projects header and list of projectboxes. Add new projectboxes to expand. Project information can be added betwixt the ProjectBox bounds.
const Projects = () => {
  return (
    <div>
      <h1 style={headerFont}>- Projects - </h1>
      <hr class="rounded" style={{ width: '800px' }}></hr>

      <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'center', marginTop: '5px' }}>Click any project to learn more!</p>

      <h1 style={{ ...headerFont, fontSize: '20px' }}>Professional Full-Stack Development</h1>
      <hr class="rounded" style={{ width: '600px' }}></hr>

      <Project_Diddly />

      <h1 style={{ ...headerFont, fontSize: '20px' }}>React</h1>
      <hr class="rounded" style={{ width: '600px' }}></hr>

      <Project_Website />

      <h1 style={{ ...headerFont, fontSize: '20px' }}>Game Development</h1>
      <hr class="rounded" style={{ width: '600px' }}></hr>

      <Project_MMM />

      <Project_Inventory />




    </div>
  );
};


// Expandable project, repurposable for each project.
const ProjectBox = (props) => {
  const { src, header, desc, skills, id, children } = props;

  // Dropdown states
  const [isOpen, setIsOpen] = useState(false);
  const toggleElems = () => {
    setIsOpen(!isOpen);

    // Will also scroll user to the top of the item.
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div id={id} className='darkblue-border centered' style={{ borderRadius: '40px', backgroundColor: '#192748', marginTop: '10px', cursor: 'pointer' }} onClick={toggleElems} >
      {/*Header image, title, and desc, always shows*/}
      <div className='flexbox-row' style={{ padding: '20px' }}>
        <img src={require(`${src}`)} alt='alt-text' className='darkblue-border' style={{ width: '100px', height: '100px', borderRadius: '100%', marginRight: '40px' }} />

        <div className='flexbox-column'>
          <h1 style={{ ...headerFont, fontSize: '25px', paddingTop: '0px', textAlign: 'initial' }}>{header}</h1>
          <hr />
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial', marginTop: '5px' }}>{desc}</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial', marginTop: '0px' }}>{skills}</p>
        </div>
      </div>

      {
        isOpen ?
          children
          :
          (<div />)
      }


    </div>
  );
}

const Project_Diddly = () => {
  return (
    <ProjectBox
      src='./Projects/diddly/diddly.jpg'
      header='Diddly | Available for iOS!'
      desc="As cofounder of Diddly LLC, I built and managed the front and backend for the mobile event-finding app Diddly."
      skills='Skills used: Swift, Python, Firebase, Firestore Database, Cloud Computing, OpenAI, network security, much more.'
      id="Project_Diddly"
    >
      {/*Add elements here.*/}
      <div className='flexbox-column' style={{ margin: 'auto', width: '80%' }} >

        {/*Section1*/}
        <div className='flexbox-row' style={{ justifyContent: 'space-evenly', paddingTop: '30px' }}>
          <video className='darkblue-border' style={{ borderWidth: '7px', borderRadius: '20px' }} width='200px' controls>
            <source src={require(`${"./Projects/diddly/appstartup.mp4"}`)} type="video/mp4" />
          </video>

          <div className='flexbox-column' style={{ padding: '20px', paddingTop: '0px' }}>
            <h2 style={{ ...headerFont, paddingTop: '0px' }}>What is Diddly?</h2>
            <hr class="rounded"></hr>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>Diddly is an app for finding and posting popup events.</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>It's used most often for small meetups, like:</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Car meets</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Concerts</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Club meetings</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Parties</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Anything else!</p>
          </div>

        </div>

        {/*Section2*/}
        <div className='flexbox-row' style={{ justifyContent: 'space-evenly', paddingTop: '30px' }}>
          <div className='flexbox-column' style={{ padding: '20px', paddingTop: '0px' }}>
            <h2 style={headerFont}>What else can it do?</h2>
            <hr class="rounded"></hr>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>Diddly uses AI to plan your day.</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>Using OpenAI, users can make fully customizable schedules.</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>These schedules are saved and stored in our Database.</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>Check out the video to see how it works!</p>
          </div>

          <video className='darkblue-border' style={{ borderWidth: '7px', borderRadius: '20px' }} width='200px' controls>
            <source src={require(`${"./Projects/diddly/saveventmakeschedule.mp4"}`)} type="video/mp4" />
          </video>
        </div>

        {/*Section3*/}
        <div className='flexbox-row' style={{ justifyContent: 'space-evenly', paddingTop: '30px' }}>
          <video className='darkblue-border' style={{ borderWidth: '7px', borderRadius: '20px' }} width='200px' controls>
            <source src={require(`${"./Projects/diddly/eventsearch.mp4"}`)} type="video/mp4" />
          </video>

          <div className='flexbox-column' style={{ padding: '20px', paddingTop: '0px' }}>
            <h2 style={{ ...headerFont, paddingTop: '0px' }}>How does it work?</h2>
            <hr class="rounded"></hr>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>Diddly uses many different APIs and cloud services. </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>I was responsible for: </p>

            <div className='flexbox-row'>
              <div className='flexbox-column' style={{ paddingRight: '20px' }}>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Heroku</p>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Firebase</p>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Firestore Database</p>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Firebase Auth</p>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- OpenAI API</p>
              </div>
              <div className='flexbox-column' >
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Google Places API</p>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Google Maps API</p>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Google Admob</p>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Google Cloud</p>
                <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Apple MapKit</p>
              </div>
            </div>

            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>The app is written in Swift with a Python backend.</p>
          </div>
        </div>

        {/*Section4*/}
        <div className='flexbox-row' style={{ justifyContent: 'space-evenly', paddingTop: '30px' }}>
          <div className='flexbox-column' style={{ padding: '20px', paddingTop: '0px' }}>
            <h2 style={headerFont}>What did I do?</h2>
            <hr class="rounded"></hr>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>My cofounder, Zachary Kang, handles the business side of our app.</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>As cofounder and CTO, I handle the full technical side.</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>My responsibilities include:</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>- All frontend features</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>- All backend features</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>- Server Maintenance</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>- Network Security</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>- Database Security</p>
          </div>

          <video className='darkblue-border' style={{ borderWidth: '7px', borderRadius: '20px' }} width='200px' controls>
            <source src={require(`${"./Projects/diddly/mapshowcase.mp4"}`)} type="video/mp4" />
          </video>
        </div>

        {/*Section5*/}
        <div className='flexbox=column' style={{ padding: '40px' }}>
          <h2 style={headerFont}>Ask me anything.</h2>
          <hr class="rounded"></hr>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>
            My cofounder Zach and I worked hard - this is my proudest project.
          </p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>
            My technical work here is far too extensive to put it all here, so much goes unmentioned!
          </p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>
            Feel free to contact me and inquire, I am happy to elaborate on anything!
          </p>

        </div>
      </div>{/* End of project children column box*/}
    </ProjectBox>
  );
} // Project_Diddly END

const Project_Website = () => {
  return (
    <ProjectBox
      src='./skillpictures/react.png'
      header='This Website!'
      desc="Made to demonstrate proficiency with React and web development. This website's code is available in the code samples section."
      skills='Skills used: React, JavaScript, CSS, HTML'
      id='Project_Website'
    >
      {/*Add elements here.*/}

      {/*Section1*/}
      <div className='flexbox-row' style={{ justifyContent: 'space-evenly', paddingTop: '30px', paddingBottom: '40px' }}>
        <img src={require(`${"./Projects/website/sitestructure.jpg"}`)} className='darkblue-border' style={{ borderWidth: '7px', borderRadius: '20px' }} />

        <div className='flexbox-column' style={{ padding: '20px', paddingTop: '0px' }}>
          <h2 style={{ ...headerFont, paddingTop: '0px' }}>About the Site</h2>
          <hr class="rounded"></hr>

          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>I made this website to showcase my skills in a fun way.</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>It's made with: </p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- React </p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- JavaScript</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- HTML / CSS</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>- Webpack</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>Find the full code in the "Code Samples" section!</p>
          <img src={reactLogo} alt='Made with React' height='60px'></img>
        </div>
      </div>
    </ProjectBox >);
}

const Project_MMM = () => {
  return (
    <ProjectBox
      src='./Projects/MMM/MMM.jpg'
      header='Magic Math Man - Mobile Game'
      desc='Made for iOS and Google Play with the Godot game engine.'
      skills='Skills used: Godot, GDScript, JavaScript'
      id='Project_MMM'
    >
      {/*Section1*/}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={headerFont}>Screenshots</h2>
        <hr class="rounded" width='400px'></hr>

        <img src={require(`${"./Projects/MMM/mmm-wavesurfer.jpg"}`)} className='darkblue-border' alt={"GameImage"} style={{ width: '70%' }} />
        <img src={require(`${"./Projects/MMM/mmm-deadwavesurfer.jpg"}`)} className='darkblue-border' alt={"GameImage"} style={{ width: '70%' }} />
        <img src={require(`${"./Projects/MMM/mmm-customizer.png"}`)} className='darkblue-border' alt={"GameImage"} style={{ width: '70%' }} />
      </div>

      {/*Section2*/}
      <div className='flexbox-column'>
        <h2 style={headerFont}>About MMM</h2>
        <hr class="rounded" width='400px'></hr>
        <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>
          Magic Math Man is my first fully complete mobile game.
        </p>
        <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>
          We plan to publish MMM to Android shortly!
        </p>
        <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>
          There's alot to show off, so:
        </p>
        <p style={{ ...bodyFont, padding: '0px', fontSize: '17px' }}>
          <a href={"https://www.youtube.com/watch?v=PgMKmtIKFNY"}>Magic Math Man</a>
        </p>
      </div>
    </ProjectBox>
  );
}

const Project_Inventory = () => {
  return (
    <ProjectBox
      src='./Projects/inventory/inventory.jpg'
      header='Inventory System'
      desc='Coded a savable, configurable inventory system from scratch.'
      skills='Skills used: Godot, GDScript, JavaScript'
      id="Project_Inventory"
    >
      {/*Section1*/}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '20px' }}>
        <h2 style={headerFont}>Details</h2>
        <hr class="rounded" width='400px'></hr>

        <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', width: '80%' }}>As part of PC game I'm still developing, I made this system.</p>

        <video className='darkblue-border' style={{ borderWidth: '7px', borderRadius: '20px' }} width='50%' controls>
          <source src={require(`${"./Projects/inventory/inventorysystem.mp4"}`)} type="video/mp4" />
        </video>

        <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', width: '80%' }}>My main goal while making this was to practice software design principles before moving on to more complex systems, like enemy AI.</p>
        <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', width: '80%' }}>As such, the system is robust and exandable, allowing for easy attachment of inventories to new objects and easy introduction of new items. </p>
      </div>
    </ProjectBox>
  );
}

const Project_Spider = () => {
  return (
    <ProjectBox
      src='./skillpictures/react.png'
      header='3D Spider Modelling, Rigging, and Compositing'
      desc='Created a spider to practice rigging, animation, and the 3D-model to pixel art pipeline.'
      skills='Skills used: Blender - modelling, animation, rigging, compositing'
    >
      {/*Add elements here.*/}

    </ProjectBox>
  );
}
// PROJECTS END






// SKILLS START
const Skills = () => {
  return (
    <div>
      <h1 style={headerFont}>- Skills - </h1>
      <hr class="rounded" style={{ width: '800px' }}></hr>
      <div className='centered' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Languages />
        <APIFrameworks />
        <Tools />
      </div>
      <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'center' }}>Additional experience with network security, Firestore security rules, and 3D modelling.</p>
    </div>
  );
};

const Languages = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ ...headerFont, fontSize: '20px', marginBottom: '5px' }}>Languages</h1>
      <div className='flexbox-row darkblue-border' style={{ border: 'solid', borderRadius: '40px', backgroundColor: '#27375b' }}>
        <div className='flexbox-column' style={{ padding: '25px' }}>
          <LabelledSkillIcon source={'./skillpictures/swift.png'} alt={'swift'} tag={'Swift'} />
          <LabelledSkillIcon source={'./skillpictures/py.png'} alt={'Python'} tag={'Python'} />
          <LabelledSkillIcon source={'./skillpictures/c++.png'} alt={'C++'} tag={'C++'} />
          <LabelledSkillIcon source={'./skillpictures/js.png'} alt={'JavaScript'} tag={'JavaScript'} />
          <LabelledSkillIcon source={'./skillpictures/css.png'} alt={'CSS'} tag={'CSS / HTML'} />
          <LabelledSkillIcon source={'./skillpictures/csharp.png'} alt={'CSharp (C#)'} tag={'CSharp (C#)'} />
          <LabelledSkillIcon source={'./skillpictures/Godot.png'} alt={'GDScript'} tag={'GDScript'} />
        </div>

      </div>
    </div>
  );
};

const APIFrameworks = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ ...headerFont, fontSize: '20px', marginBottom: '5px' }}>APIs & Frameworks</h1>
      <div className='flexbox-row darkblue-border' style={{ border: 'solid', borderRadius: '40px', backgroundColor: '#27375b' }}>
        <div className='flexbox-column' style={{ padding: '25px' }}>
          <LabelledSkillIcon source={'./skillpictures/react.png'} alt={'React'} tag={'React'} />
          <LabelledSkillIcon source={'./skillpictures/firebase.png'} alt={'Firebase'} tag={'Firebase'} />
          <LabelledSkillIcon source={'./skillpictures/firestore.png'} alt={'Firestore'} tag={'Firestore'} />
          <LabelledSkillIcon source={'./skillpictures/googlecloud.png'} alt={'GoogleCloud'} tag={'Google Cloud'} />
          <LabelledSkillIcon source={'./skillpictures/admob.png'} alt={'Admob'} tag={'Google Admob'} />
          <LabelledSkillIcon source={'./skillpictures/googleplaces.png'} alt={'GooglePlaces'} tag={'Google Places'} />
          <LabelledSkillIcon source={'./skillpictures/googlemaps.png'} alt={'GoogleMaps'} tag={'Google Maps'} />
        </div>
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ ...headerFont, fontSize: '20px', marginBottom: '5px' }}>Tools</h1>
      <div className='flexbox-row darkblue-border' style={{ border: 'solid', borderRadius: '40px', backgroundColor: '#27375b' }}>
        <div className='flexbox-column' style={{ padding: '25px' }}>
          <LabelledSkillIcon source={'./skillpictures/vscode.png'} alt={'VSCode'} tag={'Windows'} />
          <LabelledSkillIcon source={'./skillpictures/xcode.png'} alt={'XCode'} tag={'MacOS'} />
          <LabelledSkillIcon source={'./skillpictures/heroku.png'} alt={'Heroku'} tag={'Heroku'} />
          <LabelledSkillIcon source={'./skillpictures/unity.png'} alt={'Unity'} tag={'Unity'} />
          <LabelledSkillIcon source={'./skillpictures/Unreal.png'} alt={'Unreal'} tag={'Unreal'} />
          <LabelledSkillIcon source={'./skillpictures/Godot.png'} alt={'Godot'} tag={'Godot'} />
          <LabelledSkillIcon source={'./skillpictures/blender.png'} alt={'Blender'} tag={'Blender'} />
        </div>
      </div>
    </div>
  );
};
// Icon : Label
const LabelledSkillIcon = (props) => {
  const { source, alt, tag } = props;

  const imgSize = '40px';

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <img src={require(`${source}`)} alt={alt} style={{ width: imgSize, height: imgSize, padding: '10px' }} />
      <h2 style={{ ...bodyFont, fontSize: '18px' }}>{tag}</h2>
    </div>
  );

};
// SKILLS END










// EDUCATION START
const Education = () => {
  return (
    <div>
      <h1 style={headerFont}>- Education - </h1>
      <hr class="rounded" style={{ width: '800px', marginBottom: '40px' }}></hr>

      <div className='flexbox-row darkblue-border' style={{ marginLeft: '400px', marginRight: '400px', justifyContent: 'flex-start', padding: '15px', borderRadius: '100px 30px 30px 100px', backgroundColor: '#192748' }}>
        <img src={require(`${'./workpictures/calstate.png'}`)} alt='CSUSM' className='darkblue-border' style={{ width: '100px', height: '100px', padding: '20px', marginRight: '30px', borderRadius: '100%', backgroundColor: '#0e1525' }} />
        <div className='flexbox-column'>

          <h1 style={{ ...headerFont, fontSize: '20px', paddingTop: '0px', textAlign: 'initial' }}>Bachelor of Science - Computer Science</h1>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>Senior at California State University, San Marcos. Graduating May 2025.</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>Relevant classes taken:</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Software Engineering</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Data Structures & Algorithms</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Networking</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Operating Systems</p>
          <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Many others in C++, Python, and other languages.</p>

        </div>
      </div>
    </div>
  );
};
// EDUCATION END









// WORK EXPERIENCE START
const WorkExperience = () => {
  return (
    <div>
      <h1 style={headerFont}>- Work Experience - </h1>
      <hr class="rounded" style={{ width: '800px' }}></hr>

      <div className='flexbox-column'>
        <div className='flexbox-row darkblue-border' style={{ marginLeft: '400px', marginRight: '400px', justifyContent: 'flex-start', padding: '15px', borderRadius: '100px 30px 30px 100px', backgroundColor: '#192748' }}>
          <img src={require(`${'./workpictures/diddly.jpg'}`)} alt='Diddly' className='darkblue-border' style={{ width: '100px', height: '100px', padding: '20px', marginRight: '30px', borderRadius: '100%', backgroundColor: '#0e1525' }} />
          <div className='flexbox-column'>

            <h1 style={{ ...headerFont, fontSize: '20px', paddingTop: '0px', textAlign: 'initial' }}>Chief Technical Officer | Diddly LLC - 1 Year</h1>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• See Diddly in the projects section above!</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Cofounded development of event-posting app, Diddly</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Responsible for 100% of full-stack development for Diddly </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Refactored 100% of codebase to improve security </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Managed server stability and product security for Diddly, iOS </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Handled UI/UX design for app front end (Swift, SwiftUI)  </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Handled all backend and server infrastructure with various software as a service (SaaS) and cloud computing tools, including: </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>Firebase, Firestore Database, Firebase Authentication, Google Cloud, Heroku </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Personally implemented and tested 80% of app features </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Additionally connected and utilized many other APIs, including but not limited to:  </p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>Google Maps API, Google Places API, Google Admob, OpenAI API</p>

          </div>
        </div>

        <div className='flexbox-row darkblue-border' style={{ marginLeft: '400px', marginRight: '400px', justifyContent: 'flex-start', padding: '15px', borderRadius: '100px 30px 30px 100px', backgroundColor: '#192748' }}>
          <img src={require(`${'./workpictures/calstate.png'}`)} alt='CSUSM' className='darkblue-border' style={{ width: '100px', height: '100px', padding: '20px', marginRight: '30px', borderRadius: '100%', backgroundColor: '#0e1525' }} />
          <div className='flexbox-column'>

            <h1 style={{ ...headerFont, fontSize: '20px', paddingTop: '0px', textAlign: 'initial' }}>Coding Tutor for All Undergrad CS Courses - 1 Year</h1>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Provided clear instruction to students struggling with difficult concepts in computer science and math</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Advanced understanding of memory leaks, segmentation faults, time complexity, and optimization</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Effectively explained structures like maps, graphs, binary search trees, dictionaries, and many others</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Clearly explained specialized computer science knowledge to 20-30 students per week</p>

          </div>
        </div>


        <div className='flexbox-row darkblue-border' style={{ marginLeft: '400px', marginRight: '400px', justifyContent: 'flex-start', padding: '15px', borderRadius: '100px 30px 30px 100px', backgroundColor: '#192748' }}>
          <img src={require(`${'./workpictures/calstate.png'}`)} alt='CSUSM' className='darkblue-border' style={{ width: '100px', height: '100px', padding: '20px', marginRight: '30px', borderRadius: '100%', backgroundColor: '#0e1525' }} />
          <div className='flexbox-column'>

            <h1 style={{ ...headerFont, fontSize: '20px', paddingTop: '0px', textAlign: 'initial' }}>Instructional Student Assistant for Computer Science - 2 Years</h1>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Traced and analyzed activities, exams, large projects and provided thorough feedback to students</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Feedback included time and space complexity improvements, encouraged strong coding convention</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Traced other developers’ code for bad practice and offered feedback to 60+ people, weekly</p>

          </div>
        </div>


        <div className='flexbox-row darkblue-border' style={{ marginLeft: '400px', marginRight: '400px', justifyContent: 'flex-start', padding: '15px', borderRadius: '100px 30px 30px 100px', backgroundColor: '#192748' }}>
          <img src={require(`${'./workpictures/akma.png'}`)} alt='CSUSM' className='darkblue-border' style={{ width: '100px', height: '100px', padding: '20px', marginRight: '30px', borderRadius: '100%', backgroundColor: '#0e1525', overflow: 'visible' }} />
          <div className='flexbox-column'>

            <h1 style={{ ...headerFont, fontSize: '20px', paddingTop: '0px', textAlign: 'initial' }}>Martial Arts Instructor - 5 Years</h1>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Lead karate classes as the head instructor for students aged 5 to adult</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Worked alongside a team of specialist instructors to draft class plans, organize and manage class environment</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Demonstrates an aptitude for leadership as I presented myself as a role model to many young students and teens</p>
            <p style={{ ...bodyFont, padding: '0px', fontSize: '17px', textAlign: 'initial' }}>• Effectively managed and taught class sizes up to 25 students, have taught around 500 classes</p>

          </div>
        </div>


      </div>
    </div>
  );
};
// WORK EXPERIENCE END



// CODE SAMPLES START
function CodeSamples() {

  const handleClick = () => {
    window.location.href = 'https://github.com/victor-mullison/'
  }

  return (
    <div>
      <h1 style={headerFont}>- Code Samples - </h1>
      <hr class="rounded" style={{ width: '800px' }}></hr>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={bodyFont}>
          Find my code samples on my github:
        </h2>
        <img src={require(`${'./skillpictures/github.png'}`)} alt='GitHub' className='darkblue-border' style={{ width: '100px', height: '100px', padding: '20px', borderRadius: '100%', backgroundColor: '#0e1525', overflow: 'visible', display: 'block', cursor: 'pointer' }} onClick={handleClick} />

      </div>


    </div >
  );
};
// ABOUT ME END




// CONTACT ME START
function ContactMe() {
  return (
    <div>
      <h1 style={headerFont}>- Contact Me - </h1>
      <hr class="rounded" style={{ width: '800px', marginBottom: '20px' }}></hr>

      <div className='flexbox-column centered' style={{ paddingLeft: '30vw' }}>
        <ContactElement src='./contactmepics/phone.png' text='1-760-916-5797' link={false} />
        <ContactElement src='./contactmepics/mail.png' text='victormullison2023@gmail.com' link={false} />
        <ContactElement src='./contactmepics/github.png' text='github.com/victor-mullison/' link={true} />
        <ContactElement src='./contactmepics/linkedin.png' text='linkedin.com/in/victor-mullison/' link={true} />
      </div>

    </div>
  );
};


function ContactElement(props) {
  const { src, text, link } = props;

  return (
    <div className='flexbox-row' style={{ ...bodyFont, paddingBottom: '20px', alignItems: 'center' }}>
      <img src={require(`${src}`)} alt='alt-text' style={{ width: '40px', height: '40px', marginRight: '20px' }}></img>
      {link ? (
        <a href={"https://" + text}>{text}</a>
      ) : (
        <a>{text}</a>
      )
      }

    </div>
  );

};

// CONTACT ME END
export default PortfolioSite;
