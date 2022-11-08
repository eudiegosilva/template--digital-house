// import { GetServerSideProps } from 'next';

import { useState, useEffect } from 'react';

export default function Home() {
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
    <div>
      <ul>
        {repositories.map((repository) => (
          <li key={repository}>{repository}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {};
