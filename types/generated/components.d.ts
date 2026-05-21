import type { Schema, Struct } from '@strapi/strapi';

export interface FlowFlowItem extends Struct.ComponentSchema {
  collectionName: 'components_flow_flow_items';
  info: {
    displayName: 'FlowItem';
  };
  attributes: {
    precio: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['con_decodificador', 'sin_decodificador']
    >;
  };
}

export interface InternetInternetItem extends Struct.ComponentSchema {
  collectionName: 'components_internet_internet_items';
  info: {
    displayName: 'InternetItem';
    icon: 'globe';
  };
  attributes: {
    precio: Schema.Attribute.Integer;
    velocidad: Schema.Attribute.String;
  };
}

export interface MobileMobileItem extends Struct.ComponentSchema {
  collectionName: 'components_mobile_mobile_items';
  info: {
    displayName: 'mobileItem';
    icon: 'phone';
  };
  attributes: {
    cantidad_gigabytes: Schema.Attribute.String;
    precio: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'flow.flow-item': FlowFlowItem;
      'internet.internet-item': InternetInternetItem;
      'mobile.mobile-item': MobileMobileItem;
    }
  }
}
