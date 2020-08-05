import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/53912182?s=460&u=42c3d46374d6ab04849abcd79d06b4462fb3c2b9&v=4" alt="Gustavo Pelozzi"/>
                <div>
                    <strong>Gustavo Pelozzi</strong>
                    <span>Lógica de Programação</span>
                </div>
            </header>

            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            <br/><br/> 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}