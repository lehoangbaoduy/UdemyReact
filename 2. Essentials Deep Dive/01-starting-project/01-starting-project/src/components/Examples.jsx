import { useState } from 'react';
import { EXAMPLES } from './data.js';
import Section from './Section.jsx';
import TabButton from './components/TabButton.jsx';

export default function Examples () {
    const [selectedTopic, setSelectedTopic] = useState();
    
    function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
    tabContent = (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
        </div>
    );
    }
    
    return (
        <Section id="examples" title="Examples">
            <menu>
                <TabButton
                    isSe2lected={selectedTopic === 'components'}
                    onClick={() => handleSelect('components')}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleSelect('jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleSelect('props')}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => handleSelect('state')}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </Section>
    )
}