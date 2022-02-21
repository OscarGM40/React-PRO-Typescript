//1st: 👇Import YourComponent
import MyLabel from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

//2nd: 👇 Esta exportación por defecto determina el titulo que se mostrará y el componente que se renderizará
export default {
  /* The title prop is optional. */
  title: 'UI/Etiquetas/MyLabel',
  component: MyLabel,
  argTypes: {
    label: { control: { type: 'text', }, },
    size: {
      control: { type: 'select',
        options: ['normal', 'h1', 'h2', 'h3'],
      },
    },
    color: {
      control: { type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    allCaps: { control: { type: 'boolean', }, },
    fontColor: { control: 'color' }
  },

} as ComponentMeta<typeof MyLabel>

//👇 Creo una Template del componente
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>;


export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false,
  color: 'primary'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'ALL CAPS',
  size: 'normal',
  allCaps: true,
  color: 'primary'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  size: 'normal',
  color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary',
  size: 'normal',
  color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: 'Custom Font Color',
  size: 'h1',
  fontColor: '#5517ac'
}
