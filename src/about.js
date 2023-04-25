import './App.css'
import Footer from './footer.js';

function about() {
    return (
        <div className='h-min-screen text-white '>

            <div className='flex mr-[8%] mt-[3%] ml-[8%]'>
                <div className='h-inherit w-[50%]'>

                </div>

                <div className='h-inherit w-[50%]'>
                    <div>
                        <p className='newt  font-bold'> About</p>
                        <br />
                        <p className="newtt">I'm an end-to-end designer, able to make sense of requirements,
                            develop and analyse personas, conceptualise and test interactions,
                            wireframes and prototypes, and design/deliver visuals. <br />

                            I have extensive experience in both agency and client-side environments.
                            My early career in editorial and graphic design enabled a solid foundation
                            in design craft and art direction, which I use in my digital work.
                            I like to employ Lean principles where possible, iterating quickly
                            based on feedback and the needs of the project.</p>
                    </div>
                    <div className='mt-[3%] grid grid-cols-2 gap-3'>
                        <div>
                            <p className='newt '> Skills</p> <br />
                            <p className="newtt">Design systems, interfaces, interaction design,
                                information architecture, modular & component based design,
                                visual/digital design, prototyping (rapid/complex), UX design,
                                user testing, digital transformation, Agile.</p>
                        </div>

                        <div>
                            <p className='newt  '> Software</p> <br />
                            <p className="newtt">Figma, Sketch, Craft, Invision, Zeplin, Axure RP, Adobe CC
                                (XD, Photoshop, Illustrator, Indesign, Acrobat), JIRA/Confluence,
                                Miro & other collaborative tools.</p>
                        </div>

                        <div>
                            <p className='newt  '> Selected Clients</p> <br />
                            <p className="newtt">ArcelorMittal, BT, HSBC, Jaguar Land Rover, Johnson & Johnson,
                                Nestlé Purina, SanDisk, Schroders, SKF, TSB, Unilever.</p>
                        </div>

                        <div>
                            <p className='newt '> Selected Agencies</p> <br />
                            <p className="newtt">AnalogFolk, Interbrand, M&C Saatchi, McCann Enterprise,
                                Publicis Chemistry, SapientNitro (Publicis Sapient), VCCP.</p>
                        </div>

                    </div>
                <button className=' newttt mt-[4%]'>Download CV (1.1MB PDF)↓</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default about;