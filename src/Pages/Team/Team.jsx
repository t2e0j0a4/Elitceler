import React from 'react'
import styles from "./Team.module.css";
import { teamMembers } from '../../Constant';

const Team = () => {

  const { app__team, team__container, team__head, team__members, each__member, member__head, member__socials } = styles;

  return (
    <div className={app__team}>
      <div className={team__container}>

        {/* Heading */}
        <div className={team__head}>
          <h1>Team ElitCeler</h1>
          <p>
            ElitCeler Technologies is a group of exceptionally talented programmers with experience in various technologies who strive to provide excellence at every level of development.
          </p>
        </div>

        {/* Members */}
        <div className={team__members}>

          {
            teamMembers.map((member) => {
              return (
                <div key={member.id} className={each__member}>
                  <img src={member.imageSrc} alt={member.name} />
                  <div className={member__head}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                  <div className={member__socials}>
                    {
                      member.links.map((link) => {
                        return (
                          <a key={link.id} href={link.link} title={link.name} target='_blank' rel='noreferrer'><ion-icon name={link.logo}></ion-icon></a>
                        )
                      })
                    }
                  </div>
                </div>
              );
            })
          }

        </div>

      </div>
    </div>
  );
}

export default Team