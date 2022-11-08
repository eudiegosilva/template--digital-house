import { useState, useEffect } from 'react'; // CLIENT SIDE RENDERING

import * as s from './home.layout.styles';

const HomeLayout = () => {
  // CLIENT SIDE RENDERING
  const [repositories, setRepositories] = useState<string[]>([]);
  useEffect(() => {
    fetch('https://api.github.com/users/diegosilvatech/repos')
      .then((response) => response.json())
      .then((data) => {
        const respositoryNames = data.map((repository) => repository.name);

        setRepositories(respositoryNames);
      });
  }, []);

  return (
    <s.Container>
      <ul>
        {repositories.map((repository) => (
          <li key={repository}>{repository}</li>
        ))}
      </ul>
    </s.Container>
  );
};

export { HomeLayout };
