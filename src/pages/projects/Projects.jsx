import { Carousel, Image } from "react-bootstrap"
import "./projects.css"

export default function Projects() {
    return (
        <div className="projects">
            <div className="projectsLeft"></div>
            <div className="projectsCenter">
                <div className="projectsHeader">
                    <div className="projectsHeaderContent">
                        <ul className="projectsTitleList">
                            <li className="square"></li>
                            <li className="projectsTitle">Projects</li>
                        </ul>
                    </div>
                </div>
                <div className="sliderStage">
                    <Carousel>
                        <Carousel.Item as="html">
                            <img
                            className="slider"
                            src="https://i.hizliresim.com/pfh6p7g.png"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <p>You can click on me and browse my html projects.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item as="aspnet">
                            <img
                            className="slider"
                            src="https://i.hizliresim.com/en8fu7z.png"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <p>You can click on me and browse my asp.net projects.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item as="react">
                            <img
                            className="slider"
                            src="https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <p>You can click on me and browse my reactjs projects.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="projectsCardStage">
                    <div className="projectsCardStageLeft">
                        <div className="projectsCardStageLeftTop">
                            <div className="projectsCardStageLeftTopHeader">
                                <div className="projectsCardStageLeftTopHeaderL">
                                    <div className="rectangle"></div>
                                </div>
                                <div className="projectsCardStageLeftTopHeaderR">
                                    <div className="projectsCardHeader">CV Portfoilo Project</div>
                                    <div className="projectsCardTitle">Front-End</div>
                                </div>
                            </div>
                        </div>
                        <div className="projectsCardStageLeftBottom">
                            <p>The website where the person's work experiences, projects and educational information are displayed.<br/><br/><a href="/projects" className="entersite">Web Site</a>&nbsp;&nbsp;<a href="https://github.com/melihdizdar/cv-portfoilo-project" className="entersite">My Repository</a></p>
                        </div>
                    </div>
                    <div className="projectsCardStageRight">
                        <Image src="https://www.sosyalelestiri.com/wp-content/uploads/2020/11/1580817669_maxresdefault.jpg" className="image" rounded></Image>
                    </div>
                </div>
                <div className="projectsCardStage">
                    <div className="projectsCardStageLeft">
                        <div className="projectsCardStageLeftTop">
                            <div className="projectsCardStageLeftTopHeader">
                                <div className="projectsCardStageLeftTopHeaderL">
                                    <div className="rectangle"></div>
                                </div>
                                <div className="projectsCardStageLeftTopHeaderR">
                                    <div className="projectsCardHeader">Order Food</div>
                                    <div className="projectsCardTitle">Full Stack</div>
                                </div>
                            </div>
                        </div>
                        <div className="projectsCardStageLeftBottom">
                            <p>The project that displays the order note of the ordered dishes.<br/><br/><a href="/projects" className="entersite">Web Site</a>&nbsp;&nbsp;<a href="https://github.com/melihdizdar/order-food" className="entersite">My Repository</a></p>
                        </div>
                    </div>
                    <div className="projectsCardStageRight">
                        <Image src="https://www.serbestpiyasa.net/wp-content/uploads/2020/05/evden-yemek-satmak.jpg" className="image" rounded></Image>
                    </div>
                </div>
                <div className="projectsCardStage">
                    <div className="projectsCardStageLeft">
                        <div className="projectsCardStageLeftTop">
                            <div className="projectsCardStageLeftTopHeader">
                                <div className="projectsCardStageLeftTopHeaderL">
                                    <div className="rectangle"></div>
                                </div>
                                <div className="projectsCardStageLeftTopHeaderR">
                                    <div className="projectsCardHeader">Reading Books Online</div>
                                    <div className="projectsCardTitle">Full Stack</div>
                                </div>
                            </div>
                        </div>
                        <div className="projectsCardStageLeftBottom">
                            <p>Project showing pdf of purchased book.<br/><br/><a href="/projects" className="entersite">Web Site</a>&nbsp;&nbsp;<a href="https://github.com/melihdizdar/reading-books-online" className="entersite">My Repository</a></p>
                        </div>
                    </div>
                    <div className="projectsCardStageRight">
                        <Image src="https://serdara.com/wp-content/uploads/online-kitap-satis-sitesi.jpg" className="image" rounded></Image>
                    </div>
                </div>
                <div className="projectsCardStage" typ>
                    <div className="projectsCardStageLeft">
                        <div className="projectsCardStageLeftTop">
                            <div className="projectsCardStageLeftTopHeader">
                                <div className="projectsCardStageLeftTopHeaderL">
                                    <div className="rectangle"></div>
                                </div>
                                <div className="projectsCardStageLeftTopHeaderR">
                                    <div className="projectsCardHeader">2E Shoes Textile</div>
                                    <div className="projectsCardTitle">Front-End</div>
                                </div>
                            </div>
                        </div>
                        <div className="projectsCardStageLeftBottom">
                            <p>The website where the person's work experiences, projects and educational information are displayed.<br/><br/><a href="https://melih.2eayakkabitekstil.com/" className="entersite">Web Site</a>&nbsp;&nbsp;<a href="https://github.com/melihdizdar/2e-shoes-textile" className="entersite">My Repository</a></p>
                        </div>
                    </div>
                    <div className="projectsCardStageRight">
                        <Image src="https://splashdev.at/wp-content/uploads/2021/04/Business.jpg" className="image" rounded></Image>
                    </div>
                </div>
            </div>
            <div className="projectsRight"></div>
        </div>
    )
}
