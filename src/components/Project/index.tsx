import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataRepos = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created`
      );
      const dataCosmosSearch = await fetch(
        `https://api.github.com/orgs/CosmosSearch-Grupo-4-Kenzie-Academy-M3/repos`
      )
      const dataBiblioteka = await fetch(
        `https://api.github.com/orgs/m5-t15-g23/repos`
      )
          
      const jsonRepos = await dataRepos.json();

      const jsonCosmosSearch = await dataCosmosSearch.json(); 

      const jsonBiblioteka = await dataBiblioteka.json();

      const namesToExclude = ["BrunoPavanelli", "Portfolio", "APIMoveis"];
      const jsonReposFilter = jsonRepos.filter((repo: ReposType) => !namesToExclude.includes(repo.name))
      
      const namesCosmosSearchToExclude = ["CosmosSeach-FakeApi"];
      const jsonCosmosSearchFilter = jsonCosmosSearch.filter((repo: ReposType) => !namesCosmosSearchToExclude.includes(repo.name))
      
      setRepositories([...jsonReposFilter, ...jsonCosmosSearchFilter, ...jsonBiblioteka]);

      return jsonRepos;
    };

    fetchData();
  }, []);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink
                  target="_blank"
                  href={repository.homepage}
                >
                  <FaShare /> See demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
