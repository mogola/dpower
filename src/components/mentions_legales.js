import React from 'react';
import { themeContext } from './../context/theme-context'
import loadable from '@loadable/component'
import NavBarGeneric from './NavBar'
const FooterContainer = loadable(() => import('./Footer'))

const MentionsLegales = () => {
    return (
        <themeContext.Consumer>
        {({ colorTheme, colorThemeHexa, toggleTheme }) => (
            <>
                <NavBarGeneric colorStroke={colorThemeHexa} colorTheme={colorTheme} />
                <div style={{padding: '80px'}} className="mentions_legales hero is-twitter">
                    <h2 style={{fontFamily: 'assistantBold',fontSize:'22px'}}>Mentions légales et politique de confidentialité</h2>
        <p>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span rl-text="content1">La société&nbsp;
                  <span className="boiler-field">Onfirstdigital</span>
                </span>
                ,&nbsp;soucieuse&nbsp;des droits des individus, notamment au regard des traitements automatisés&nbsp;et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la disposition des individus afin qu’ils puissent au mieux exercer leurs droits.&nbsp;
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site&nbsp;:&nbsp;</span>
              <a href="https://www.cnil.fr/">
                <span style={{color: '#ffffff'}}>https://www.cnil.fr/</span>
              </a>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal', textAlign: 'start'}}>La poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions d'utilisation qui suivent.</span>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant toute la durée d'utilisation du site et jusqu'à ce qu'une nouvelle version la remplace.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 1 - Mentions&nbsp;légales</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <u>1.1&nbsp;Site (ci-après «&nbsp;le site&nbsp;»)</u>&nbsp;:
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span className="boiler-field">Onfirstdigital.com</span>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <u>1.2&nbsp;Éditeur (ci-après «&nbsp;l'éditeur&nbsp;»)</u>&nbsp;:&nbsp;
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <div rl-text="content3">
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>
                  <span className="boiler-field">Onfirstdigital</span>
                  <span className="boiler-field">SAS</span>&nbsp;au capital de&nbsp;
                  <span className="boiler-field">20 000</span>&nbsp;€
                </span>
              </span>
            </span>
          </p>
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>dont le siège social est situé :&nbsp;
                  <span className="boiler-field">33 rue la Fayette</span>&nbsp;
                  <span className="boiler-field">75009</span>&nbsp;
                </span>
              </span>
            </span>
          </p>
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>représentée par&nbsp;
                  <span className="boiler-field">Mogola Sangare</span>, en sa qualité de&nbsp;
                  <span className="boiler-field">CTO</span>
                </span>
              </span>
            </span>
          </p>
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>immatriculée au RCS de
                  <span className="boiler-field empty" />
                </span>
              </span>
            </span>
          </p>
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>n° de téléphone&nbsp;:
                  <span className="boiler-field"> 07 80 97 50 94</span>
                </span>
              </span>
            </span>
          </p>
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>adresse mail :
                  <span className="boiler-field">contact@onfirstdigital.com</span>
                </span>
              </span>
            </span>
          </p>
        </div>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <u>1.3&nbsp;Hébergeur (ci-après « l'hébergeur »)</u> :&nbsp;
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span className="boiler-field">Onfirstdigital.com</span>&nbsp;est hébergé par&nbsp;
                <span className="boiler-field">ionos</span>, dont le siège social est situé
                <span className="boiler-field">7 Place de la Gare</span>&nbsp;
                <span className="boiler-field">57200 Sarreguemines</span>.
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>&nbsp;</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 2 -&nbsp;Accès au site</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l'envoi de courriers électroniques non sollicités.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 3 -&nbsp;Contenu du site</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Ils sont la propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont strictement interdites. Le fait pour l'éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 4 -&nbsp;Gestion du site</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Pour la bonne gestion du site, l'éditeur pourra à tout moment&nbsp;:</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>-&nbsp;&nbsp;suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes ;</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>-&nbsp;&nbsp;supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales ;</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>-&nbsp;&nbsp;suspendre le site afin de procéder à des mises à jour.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 5 -&nbsp;Responsabilités</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet. Vous êtes par ailleurs&nbsp;seul responsable des sites et données que vous consultez.</span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>L'éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre :</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>-&nbsp;&nbsp;du fait de l'usage du site ou de tout service accessible&nbsp;via&nbsp;Internet&nbsp;;</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>-&nbsp;&nbsp;du fait du non-respect par vous des présentes conditions générales.</span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>L'éditeur n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire en&nbsp;raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 6 -&nbsp;Liens hypertextes</strong>
              </span>
            </span>
          </span>
          <br />
          &nbsp;
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>La mise en place par les utilisateurs&nbsp;de tous liens hypertextes vers tout ou partie du site&nbsp;
                <span rl-text="content29">est strictement interdite, sauf autorisation préalable et écrite de l'éditeur.</span>&nbsp;
              </span>
            </span>
          </span>
        </p>
        <div rl-text="content28">
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>L'éditeur est libre de refuser cette autorisation sans avoir à justifier de quelque manière que ce soit sa décision. Dans le cas où l'éditeur accorderait son autorisation, celle-ci n'est dans tous les cas que temporaire et pourra être retirée à tout moment, sans obligation de justification à la charge de l'éditeur.</span>
              </span>
            </span>
          </p>
        </div>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Toute information accessible&nbsp;via&nbsp;un lien vers d'autres sites n'est pas publiée par l'éditeur. L'éditeur ne dispose d'aucun droit sur le contenu présent dans ledit lien.&nbsp;</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 7 -&nbsp;Collecte et protection&nbsp;des données</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Vos données sont collectées par
                <span rl-text="content5">la société&nbsp;
                  <span className="boiler-field">Onfirstdigital</span>
                </span>
              </span>
            </span>
          </span>
          <span style={{}}>
            <span style={{}}>
              <span style={{color: '#ffffff'}}>
                <span>
                  .
                </span>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée&nbsp;identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes. </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Les données personnelles collectées sont les suivantes :</span>
            </span>
          </span>
        </p>
        <div rl-text="content3">
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>- nom et prénom</span>
              </span>
            </span>
          </p>
        </div>
        <div rl-text="content5">
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>- adresse mail</span>
              </span>
            </span>
          </p>
        </div>
        <div rl-text="content6">
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>- numéro de téléphone</span>
              </span>
            </span>
          </p>
        </div>
        <div rl-text="content8">
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>-&nbsp;
                  <span className="boiler-field">détail du projet</span>
                </span>
              </span>
            </span>
          </p>
        </div>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>&nbsp;</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 8 - Droit d’accès, de rectification et de déréférencement de vos données</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>&nbsp;</p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants&nbsp;:</span>
              </span>
            </span>
          </span>
        </p>
        <ul style={{}}>
          <li>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>
                  <span style={{fontStyle: 'normal'}}>le droit d’accès&nbsp;: ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant, en écrivant à l'adresse électronique ci-dessous mentionnée. Dans ce cas, avant la mise en œuvre de ce droit, la Plateforme peut demander une preuve de l'identité de l'utilisateur afin d'en vérifier l'exactitude ;</span>
                </span>
              </span>
            </span>
          </li>
          <li dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal'}}>
            <p dir="ltr" style={{textAlign: 'justify'}}>
              <span style={{fontSize: '16px'}}>
                <span style={{fontFamily: 'assistantBold'}}>
                  <span style={{color: '#ffffff'}}>
                    <span style={{fontStyle: 'normal'}}>le droit de rectification&nbsp;: si les données à caractère personnel détenues par la Plateforme sont inexactes, ils peuvent demander la mise à jour des informations ;</span>
                  </span>
                </span>
              </span>
            </p>
          </li>
          <li dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal'}}>
            <p dir="ltr" style={{textAlign: 'justify'}}>
              <span style={{fontSize: '16px'}}>
                <span style={{fontFamily: 'assistantBold'}}>
                  <span style={{color: '#ffffff'}}>
                    <span style={{fontStyle: 'normal'}}>le droit de suppression des données&nbsp;: les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matière de protection des données ;</span>
                  </span>
                </span>
              </span>
            </p>
          </li>
          <li dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal'}}>
            <p dir="ltr" style={{textAlign: 'justify'}}>
              <span style={{fontSize: '16px'}}>
                <span style={{fontFamily: 'assistantBold'}}>
                  <span style={{color: '#ffffff'}}>
                    <span style={{fontStyle: 'normal'}}>le droit à la limitation du traitement&nbsp;: les utilisateurs peuvent de demander à la Plateforme de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD ;</span>
                  </span>
                </span>
              </span>
            </p>
          </li>
          <li dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal'}}>
            <p dir="ltr" style={{textAlign: 'justify'}}>
              <span style={{fontSize: '16px'}}>
                <span style={{fontFamily: 'assistantBold'}}>
                  <span style={{color: '#ffffff'}}>
                    <span style={{fontStyle: 'normal'}}>le droit de s’opposer au traitement des données&nbsp;: les utilisateurs peuvent s’opposer à ce que leurs&nbsp;données soient traitées conformément aux hypothèses prévues par le RGPD ;</span>
                  </span>
                </span>
              </span>
            </p>
          </li>
          <li dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal'}}>
            <p dir="ltr" style={{textAlign: 'justify'}}>
              <span style={{fontSize: '16px'}}>
                <span style={{fontFamily: 'assistantBold'}}>
                  <span style={{color: '#ffffff'}}>
                    <span style={{fontStyle: 'normal'}}>le droit à la portabilité : ils peuvent réclamer que la Plateforme leur remette les données personnelles qu'ils&nbsp;ont fournies&nbsp;pour les transmettre à une nouvelle Plateforme.</span>
                  </span>
                </span>
              </span>
            </p>
          </li>
        </ul>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Vous pouvez exercer ce droit en nous contactant, à l’adresse suivante&nbsp;:</span>
            </span>
          </span>
        </p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span className="boiler-field">33 rue la Fayette</span>&nbsp;
                <span className="boiler-field">75009</span>
              </span>
            </span>
          </span>&nbsp;
          &nbsp;
          .
        </p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>&nbsp;</p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Ou par email, à l’adresse&nbsp;:</span>
            </span>
          </span>
        </p>
        <div rl-text="content10">
          <p>
            <span className="boiler-field">contact@onfirstdigital.com</span>&nbsp; &nbsp;&nbsp;
          </p>
        </div>
        <p>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>&nbsp;</span>
            </span>
          </span>
        </p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Toute demande doit être accompagnée de la photocopie d’un titre d’identité en cours de validité signé et faire mention de l’adresse à laquelle l'éditeur pourra contacter le demandeur. La réponse sera adressée dans le mois suivant la réception de la demande. Ce&nbsp;délai d'un mois peut être prolongé de deux mois si la complexité de la demande et/ou le nombre de demandes l'exigent.</span>
            </span>
          </span>
        </p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>&nbsp;</p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>De plus, et depuis la loi n°2016-1321 du 7 octobre 2016, les personnes qui le souhaitent, ont la possibilité d’organiser le sort de leurs données après leur décès. Pour plus d’information sur le sujet, vous pouvez consulter le site Internet de la CNIL&nbsp;:&nbsp;https://www.cnil.fr/.</span>
            </span>
          </span>
        </p>
        <p>&nbsp;</p>
        <p dir="ltr" style={{textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>Les utilisateurs peuvent aussi introduire une réclamation auprès de la CNIL sur le site de la CNIL&nbsp;: </span>
              </span>
              <a href="https://www.cnil.fr" style={{}}>
                <span style={{color: '#ffffff'}}>
                  <span style={{fontStyle: 'normal'}}>https://www.cnil.fr</span>
                </span>
              </a>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>. </span>
              </span>
            </span>
          </span>
        </p>
        <p>&nbsp;</p>
        <p dir="ltr" style={{textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>Nous vous recommandons&nbsp;de nous contacter&nbsp;dans un premier temps&nbsp;avant de déposer une réclamation auprès de la CNIL, car nous sommes à votre entière disposition pour régler votre problème. </span>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 9 - Utilisation des données</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d'un environnement sécurisé. La base légale des traitements est &nbsp;l’exécution du contrat entre l’utilisateur et la Plateforme. Plus précisément, les utilisations sont les suivantes&nbsp;:</span>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- accès et utilisation de la Plateforme par l'utilisateur&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- gestion du fonctionnement et optimisation de la Plateforme&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- mise en œuvre d'une assistance utilisateurs&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- vérification, identification et authentification des données transmises par l'utilisateur&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- personnalisation des services en affichant des publicités en fonction de l'historique de navigation de l'utilisateur, selon ses préférences&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- prévention et détection des fraudes, malwares (malicious softwares ou logiciels malveillants) et gestion des incidents de sécurité&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- gestion des éventuels litiges avec les utilisateurs&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- envoi d'informations commerciales et publicitaires, en fonction des préférences de l'utilisateur ;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>&nbsp;</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 10 - Politique de conservation des données</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p dir="ltr" style={{textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou son&nbsp;assistance. </span>
              </span>
            </span>
          </span>
        </p>
        <p>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos informations si nécessaire, même après que vous ayez fermé votre compte ou que nous n'ayons&nbsp;plus besoin pour vous fournir nos&nbsp;services.</span>
              </span>
            </span>
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>
                  <span style={{fontStyle: 'normal'}}>Article 11- Partage des données personnelles avec des tiers</span>
                </strong>
              </span>
            </span>
          </span>
        </p>
        <p>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement dans l’Union européenne, dans les cas suivants&nbsp;:</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- lorsque l'utilisateur publie, dans les zones de commentaires libres de la Plateforme, des informations accessibles au public&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- quand l'utilisateur autorise le site web d'un tiers à accéder à ses données&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- quand la Plateforme recourt aux services de prestataires pour fournir l'assistance utilisateurs, la publicité et les services de paiement. Ces prestataires disposent d'un accès limité aux données de l'utilisateur, dans le cadre de l'exécution de ces prestations, et ont l'obligation contractuelle de les utiliser en conformité avec les dispositions de la réglementation applicable en matière protection des données à caractère personnel&nbsp;;</span>
              </span>
            </span>
          </span>
        </p>
        <p dir="ltr" style={{color: 'rgb(0, 0, 0)', fontStyle: 'normal', textAlign: 'justify'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal'}}>- si la loi l'exige, la Plateforme peut effectuer la transmission de données pour donner suite aux réclamations présentées contre la Plateforme et se conformer aux procédures administratives et judiciaires.</span>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 12&nbsp;- Offres commerciales</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Vous êtes susceptible de recevoir des offres commerciales de l'éditeur. Si vous ne le souhaitez pas, veuillez cliquer sur le lien suivant&nbsp;:
                <span className="boiler-field">contact@onfirstdigital.com</span>.
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Vos données sont susceptibles d’être utilisées par les partenaires de l'éditeur à des fins de prospection commerciale, si vous ne le souhaitez pas, veuillez cliquer sur le lien suivant&nbsp;:
                <span className="boiler-field">contact@onfirstdigital.com</span>.
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Si, lors de la consultation du site, vous accédez à des données à caractère personnel, vous devez vous abstenir de toute collecte, de toute utilisation non autorisée et de tout acte pouvant constituer une atteinte à la vie privée ou à la réputation des personnes. L'éditeur décline toute responsabilité à cet égard.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Les données sont conservées et utilisées pour une durée conforme à la législation en vigueur.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 13&nbsp;-&nbsp;Cookies</strong>&nbsp;
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Qu’est-ce qu’un «&nbsp;cookie&nbsp;»&nbsp;?</span>
            </span>
          </span>
        </p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Un «&nbsp;Cookie&nbsp;» ou traceur est un fichier électronique déposé sur un terminal (ordinateur, tablette, smartphone,…) et lu par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électronique, de l'installation ou de l'utilisation d'un logiciel ou d'une application mobile et ce, quel que soit le type de terminal utilisé&nbsp;
                <span style={{fontStyle: 'normal', textAlign: 'start'}}>(source&nbsp;:&nbsp;</span>
              </span>
              <a href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi" style={{color: 'rgb(148, 88, 23)', fontStyle: 'normal', textAlign: 'start'}}>
                <span style={{color: '#ffffff'}}>https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi</span>
              </a>
              <span style={{color: '#ffffff'}}>
                <span style={{fontStyle: 'normal', textAlign: 'start'}}>)</span>.
              </span>
            </span>
          </span>
        </p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>En naviguant sur ce site, des «&nbsp;cookies&nbsp;» émanant de la société responsable du site concerné et/ou des sociétés tiers pourront être déposés sur votre terminal.</span>
            </span>
          </span>
        </p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Lors de la première navigation sur ce site, une bannière explicative sur l’utilisation des «&nbsp;cookies&nbsp;» apparaîtra. Dès lors, en poursuivant la navigation, le client et/ou prospect sera réputé informé et avoir accepté l’utilisation desdits «&nbsp;cookies&nbsp;». Le consentement donné sera valable pour une période de treize (13) mois.&nbsp;
                <span style={{fontStyle: 'normal'}}>L'utilisateur a la possibilité de désactiver les cookies à partir des paramètres de son navigateur. </span>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Toutes les informations collectées&nbsp;ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons.</span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <p style={{}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Les cookies suivants sont présents sur ce site :&nbsp;</span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
        <div rl-text="content1">
          <p style={{}}>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>
                  <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Cookies Google :</strong>
                </span>
              </span>
            </span>
          </p>
          <p>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>- Google analytics : permet de mesurer l'audience du site ;
                  <br />
                  - Google tag manager : facilite l’implémentation des tags sur les pages et permet&nbsp;de gérer les balises Google ;
                  <br />
                  - Google Adsense : régie publicitaire de Google utilisant les sites web ou les vidéos YouTube comme support pour ses annonces ;&nbsp;
                  <br />
                  - Google Dynamic Remarketing : permet de vous proposer de la publicité dynamique en fonction des précédentes recherches ;&nbsp;
                  <br />
                  - Google Adwords Conversion : outil de suivi des campagnes publicitaires adwords ;&nbsp;
                  <br />
                  - DoubleClick : cookies publicitaires de Google pour diffuser des bannières.
                </span>
              </span>
            </span>
          </p>
          <p>&nbsp;</p>
        </div>
        <div rl-text="content2">
          <p>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>
                  <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Cookies Facebook :</strong>
                </span>
              </span>
            </span>
          </p>
          <p>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>- Facebook connect : permet de s'identifier à l'aide de son compte Facebook ;
                  <br />
                  - Facebook social plugins : permet de liker, partager, commenter du contenu avec un&nbsp;compte Facebook ;
                  <br />
                  - Facebook Custom Audience : permet d'intérargir avec l'audience sur Facebook.
                </span>
              </span>
            </span>
          </p>
          <p>&nbsp;</p>
        </div>
        <div rl-text="content3">
          <p>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>
                  <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Cookies Twitter :</strong>
                </span>
              </span>
            </span>
          </p>
          <p>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>- Twitter button : permet de partager facilement et afficher le contenu de Twitter ;
                  <br />
                  - Twitter advertising : permet d'afficher et de cibler des publicités par la régie publicitaire de Twitter.
                </span>
              </span>
            </span>
          </p>
          <p>&nbsp;</p>
        </div>
        <div>
          <p>
            <span style={{fontSize: '16px'}}>
              <span style={{fontFamily: 'assistantBold'}}>
                <span style={{color: '#ffffff'}}>&nbsp;&nbsp;</span>
              </span>
            </span>
          </p>
        </div>
        <p>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>La&nbsp;durée de vie de ces cookies est de treize mois.</span>
            </span>
          </span>
        </p>
        <p>&nbsp;</p>
        <p style={{color: 'rgb(82, 82, 82)', fontStyle: 'normal', textAlign: 'start'}}>
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Pour plus d’informations sur l’utilisation, la gestion et la suppression des «&nbsp;cookies&nbsp;», pour tout type de navigateur, nous vous invitons à consulter le lien suivant&nbsp;:&nbsp;</span>
              <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" style={{color: 'rgb(214, 128, 33)'}}>
                <span style={{color: '#ffffff'}}>https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser</span>
              </a>
              <span style={{color: '#ffffff'}}>.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 14&nbsp;-&nbsp;Photographies et représentation des produits</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Les photographies de produits, accompagnant leur description, ne sont pas contractuelles et n'engagent pas l'éditeur.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 15&nbsp;-&nbsp;Loi applicable</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l'éditeur, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.</span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>
                <strong style={{ color:'#ffffff', textTransform:'uppercase'}}>Article 16&nbsp;-&nbsp;Contactez-nous</strong>
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>
          <br />
          <span style={{fontSize: '16px'}}>
            <span style={{fontFamily: 'assistantBold'}}>
              <span style={{color: '#ffffff'}}>Pour toute question, information sur les produits présentés sur le site, ou concernant le site lui-même, vous pouvez laisser un message à l'adresse suivante&nbsp;:&nbsp;
                <span className="boiler-field">contact@onfirstdigital.com</span>
                .&nbsp; &nbsp; &nbsp;
              </span>
            </span>
          </span>
        </p>
        <p style={{}}>&nbsp;</p>
      </div>
                <FooterContainer />
            </>
            )}
        </themeContext.Consumer>)
}

export default MentionsLegales;