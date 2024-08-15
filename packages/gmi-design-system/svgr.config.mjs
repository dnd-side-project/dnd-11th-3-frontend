/**  @type {import('@svgr/core').Config} */
export default {
  typescript: true,
  replaceAttrValues: {
    '#2A2A2A': '{color}',
  },
  ref: true,
  jsxRuntime: 'automatic',
  exportType: 'named',
  titleProp: true,
  svgProps: {
    width: '{size}',
    height: '{size}',
    color: '{color}',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'removeAttrs',
        params: {
          attrs: 'xmlns',
        },
      },
    ],
  },
  template: (variables, { tpl }) => {
    variables.componentName = variables.componentName.replace(/^Svg/, '')

    variables.props.forEach(prop => {
      if (prop.type === 'ObjectPattern') {
        prop.properties = [
          {
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'title' },
            value: {
              type: 'AssignmentPattern',
              left: { type: 'Identifier', name: 'title' },
              right: { type: 'StringLiteral', value: `${variables.componentName}` },
            },
            computed: false,
            shorthand: true,
            decorators: null,
          },
          {
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'titleId' },
            value: {
              type: 'AssignmentPattern',
              left: { type: 'Identifier', name: 'titleId' },
              right: { type: 'StringLiteral', value: `GDS-${variables.componentName}` },
            },
            computed: false,
            shorthand: true,
            decorators: null,
          },
          {
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'size' },
            value: {
              type: 'AssignmentPattern',
              left: { type: 'Identifier', name: 'size' },
              right: { type: 'NumericLiteral', value: 20 },
            },
            computed: false,
            shorthand: false,
            decorators: null,
          },
          {
            type: 'ObjectProperty',
            key: { type: 'Identifier', name: 'color' },
            value: {
              type: 'AssignmentPattern',
              left: { type: 'Identifier', name: 'color' },
              right: { type: 'StringLiteral', value: '#2A2A2A' },
            },
            computed: false,
            shorthand: false,
            decorators: null,
          },
          prop.properties[prop.properties.length - 1],
        ]

        prop.typeAnnotation = {
          type: 'TSTypeAnnotation',
          typeAnnotation: {
            type: 'TSIntersectionType',
            types: [
              {
                type: 'TSTypeReference',
                typeName: { type: 'Identifier', name: 'SVGProps' },
                typeParameters: {
                  type: 'TSTypeParameterInstantiation',
                  params: [
                    {
                      type: 'TSTypeReference',
                      typeName: { type: 'Identifier', name: 'SVGSVGElement' },
                      typeParameters: null,
                    },
                  ],
                },
              },
              {
                type: 'TSTypeReference',
                typeName: { type: 'Identifier', name: 'IconProps' },
                typeParameters: null,
              },
            ],
          },
        }
      }
      return prop
    })

    return tpl`
    ${variables.imports}
    import type { IconProps } from '../shared/props';
    
    const ${variables.componentName} = (${variables.props}) => (
      ${variables.jsx}
    );
    
    const ForwardRef = forwardRef(${variables.componentName});
    export { ForwardRef as ${variables.componentName} };
    
    `
  },
}
