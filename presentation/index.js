// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Image
} from 'spectacle';

import preloader from 'spectacle/src/utils/preloader';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

require('prismjs/components/prism-typescript');
// Require CSS
require('normalize.css');

const images = {
  codeCov: require('../assets/codeCov.png'),
  penguins: require('../assets/penguins.jpg'),
  badUnit: require('../assets/unit-testing.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  dancing: require('../assets/dancing.gif'),
  screaming: require('../assets/screaming.gif')
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#23B8CC',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['slide']}
          bgImage={images.penguins.replace('/', '')}
          bgDarken={0.75}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Mutation Testing
          </Heading>
          <Heading size={1} fit caps>
            An explanation of what it is
          </Heading>
          <Heading size={1} fit caps textColor="white">
            Why it's important
          </Heading>
          <Text bold caps textColor="tertiary">
            And how you can use it
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Agenda
          </Heading>
          <List>
            <ListItem>(Automated) Testing</ListItem>
            <ListItem>Mutation Testing</ListItem>
            <ListItem>Stryker.js Demo</ListItem>
          </List>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes="Talk about the ROI and cost benefit of having testing in general."
        >
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            But first a story...
          </Heading>
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes={
            'This is how you are feeling. It passed all the ' +
            'required steps with flying colors, unit tests, code review, q/a testing and you are feeling amazing.'
          }
        >
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            You write some code and it slides into production
          </Heading>
          <br />
          <Image src={images.dancing.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="primary"
          textColor="tertiary"
          notes={
            'This doesnt make any sense? We wrote unit tests, did everything as planned! Something must have slipped through...'
          }
        >
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            A user files a bug!
          </Heading>
          <br />
          <Image
            src={images.screaming.replace('/', '')}
            margin="0px auto 40px"
          />
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            How could this happen!
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <CodePane
            textSize="17"
            lang={'typescript'}
            source={require('raw-loader!../src/sample-module/sample.ts')}
          />
          <Heading size={4} fit caps lineHeight={1} textColor="secondary">
            (We didn't see Talha's talk...)
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <CodePane
            textSize="17"
            lang={'typescript'}
            source={require('raw-loader!../src/sample-module/__tests__/sample.test.ts')}
          />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="tertiary"
          textColor="primary"
          note={
            'OVER 9000! WE ARE DONE UNIT TESTING FOREVER!' +
            'Can anyone spot the error?'
          }
        >
          <Image src={images.codeCov.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Decieving test coverage</ListItem>
            <ListItem>Not asserting critical code</ListItem>
            <ListItem>Input data not realistic</ListItem>
            <ListItem>Not testing all cases</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Is coverage the only tool we have?
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Mutation Testing
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="secondary">
          <Heading size={5}>
            Originally purposed in 1971 by a man named Richard Lipton. Change
            the AST of your codebase to see if your tests still pass.
          </Heading>
          <Heading size={3}>
            When a test case fails, save the "mutation", and destroy it
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="secondary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Why I think it's still not that popular:
          </Heading>
          <List>
            <ListItem>Long run time</ListItem>
            <ListItem>Language specific</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
