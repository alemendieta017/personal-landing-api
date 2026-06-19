import type { Schema, Struct } from '@strapi/strapi';

export interface CombosComboItem extends Struct.ComponentSchema {
  collectionName: 'components_combos_combo_items';
  info: {
    displayName: 'ComboItem';
  };
  attributes: {
    badge: Schema.Attribute.String;
    includesFlow: Schema.Attribute.Boolean;
    internetSpeed: Schema.Attribute.String;
    invoiceDiscount: Schema.Attribute.BigInteger;
    isPopular: Schema.Attribute.Boolean;
    mobileData: Schema.Attribute.String;
    name: Schema.Attribute.String;
    originalInternetSpeed: Schema.Attribute.String;
    originalMobileData: Schema.Attribute.String;
    price: Schema.Attribute.BigInteger;
    type: Schema.Attribute.Enumeration<['dos_productos', 'tres_productos']>;
  };
}

export interface FlowFlowItem extends Struct.ComponentSchema {
  collectionName: 'components_flow_flow_items';
  info: {
    displayName: 'FlowItem';
  };
  attributes: {
    precio: Schema.Attribute.BigInteger;
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
    precio: Schema.Attribute.BigInteger;
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
    portabilidad: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    precio: Schema.Attribute.BigInteger;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'combos.combo-item': CombosComboItem;
      'flow.flow-item': FlowFlowItem;
      'internet.internet-item': InternetInternetItem;
      'mobile.mobile-item': MobileMobileItem;
    }
  }
}
