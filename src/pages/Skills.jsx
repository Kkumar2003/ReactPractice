import React from 'react';

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'HTML5', level: 'Advanced' },
    { name: 'CSS3', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'Redux', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Beginner' },
];

const Skills = () => (
    <section style={{ padding: '2rem' }}>
        <h2>My Skills</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {skills.map((skill) => (
                <li key={skill.name} style={{ margin: '0.5rem 0', display: 'flex', justifyContent: 'space-between', maxWidth: 300 }}>
                    <span>{skill.name}</span>
                    <span style={{ color: '#888' }}>{skill.level}</span>
                </li>
            ))}
        </ul>
    </section>
);

export default Skills;