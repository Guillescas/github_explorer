import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59893752?s=460&u=c07c8eb71ce76c97bbe756e511597bcb506af578&v=4"
            alt="Guilherme Illescas"
          />
          <div>
            <strong>Guillescas/Proffy</strong>
            <p>
              Repositório dedicado ao projeto criado durante a Next Level Week
              2.0!
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59893752?s=460&u=c07c8eb71ce76c97bbe756e511597bcb506af578&v=4"
            alt="Guilherme Illescas"
          />
          <div>
            <strong>Guillescas/Proffy</strong>
            <p>
              Repositório dedicado ao projeto criado durante a Next Level Week
              2.0!
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/59893752?s=460&u=c07c8eb71ce76c97bbe756e511597bcb506af578&v=4"
            alt="Guilherme Illescas"
          />
          <div>
            <strong>Guillescas/Proffy</strong>
            <p>
              Repositório dedicado ao projeto criado durante a Next Level Week
              2.0!
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
