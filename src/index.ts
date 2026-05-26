import type { Core } from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      console.log("--- Bootstrap: Checking Combos single type ---");
      const uid = "api::combo.combo";

      // In Strapi v5, single types can be queried with findFirst
      const comboDoc = await strapi.documents(uid).findFirst({
        populate: ["ComboItem"],
      });

      console.log(
        "Existing combo document:",
        comboDoc ? JSON.stringify(comboDoc) : "none",
      );

      const combosData: Array<{
        name: string;
        price: number;
        type: "dos_productos" | "tres_productos";
        internetSpeed: string;
        mobileData: string;
        includesFlow: boolean;
        badge: string;
        isPopular: boolean;
        originalPrice: number;
        originalInternetSpeed: string;
        originalMobileData: string;
        invoiceDiscount?: number;
      }> = [
        {
          name: "Internet 400 Mbps + Flow",
          price: 185000,
          type: "dos_productos",
          internetSpeed: "800 Mbps",
          mobileData: "",
          includesFlow: true,
          badge: "¡Velocidad duplicada de 400Mbps a 800Mbps!",
          isPopular: false,
          originalPrice: 220000,
          originalInternetSpeed: "400 Mbps",
          originalMobileData: "",
        },
        {
          name: "Internet 800 Mbps + Flow",
          price: 235000,
          type: "dos_productos",
          internetSpeed: "1 Gbps",
          mobileData: "",
          includesFlow: true,
          badge: "¡Velocidad duplicada de 800Mbps a 1 Gbps!",
          isPopular: false,
          originalPrice: 320000,
          originalInternetSpeed: "800 Mbps",
          originalMobileData: "",
        },
        {
          name: "Internet 400 Mbps + Plan móvil 18 GB",
          price: 165000,
          type: "dos_productos",
          internetSpeed: "800 Mbps",
          mobileData: "36 GB",
          includesFlow: false,
          badge: "¡Velocidad a 800Mbps y gigas a 36GB!",
          isPopular: false,
          originalPrice: 235000,
          originalInternetSpeed: "400 Mbps",
          originalMobileData: "18 GB",
        },
        {
          name: "Internet 800 Mbps + Plan móvil 32 GB",
          price: 235000,
          type: "dos_productos",
          internetSpeed: "1 Gbps",
          mobileData: "64 GB",
          includesFlow: false,
          badge: "¡Velocidad a 1 Gbps y gigas a 64GB!",
          isPopular: false,
          originalPrice: 370000,
          originalInternetSpeed: "800 Mbps",
          originalMobileData: "32 GB",
        },
        {
          name: "Internet 400 Mbps + Flow + Plan móvil 18 GB",
          price: 250000,
          type: "tres_productos",
          internetSpeed: "800 Mbps",
          mobileData: "36 GB",
          includesFlow: true,
          badge: "¡Internet a 800Mbps y gigas a 36GB!",
          isPopular: false,
          originalPrice: 305000,
          originalInternetSpeed: "400 Mbps",
          originalMobileData: "18 GB",
        },
        {
          name: "Internet 400 Mbps + Flow + Plan móvil 32 GB",
          price: 270000,
          type: "tres_productos",
          internetSpeed: "800 Mbps",
          mobileData: "64 GB",
          includesFlow: true,
          badge: "¡Internet a 800Mbps y gigas a 64GB!",
          isPopular: true,
          originalPrice: 340000,
          originalInternetSpeed: "400 Mbps",
          originalMobileData: "32 GB",
        },
        {
          name: "Internet 800 Mbps + Flow + Plan móvil 32 GB",
          price: 320000,
          type: "tres_productos",
          internetSpeed: "1 Gbps",
          mobileData: "64 GB",
          includesFlow: true,
          badge: "¡Internet a 1 Gbps y gigas a 64GB!",
          isPopular: true,
          originalPrice: 440000,
          originalInternetSpeed: "800 Mbps",
          originalMobileData: "32 GB",
          invoiceDiscount: 20000,
        },
        {
          name: "Internet 800 Mbps + Flow + Plan móvil 18 GB",
          price: 300000,
          type: "tres_productos",
          internetSpeed: "1 Gbps",
          mobileData: "36 GB",
          includesFlow: true,
          badge: "¡Internet a 1 Gbps y gigas a 36GB!",
          isPopular: false,
          originalPrice: 405000,
          originalInternetSpeed: "800 Mbps",
          originalMobileData: "18 GB",
        },
      ];

      const dataToSave = {
        title: "Armá tu Combo y Multiplicá tus Beneficios",
        subtitle:
          "Duplicamos la velocidad de tu internet y los gigas de tu línea móvil al combinar tus servicios.",
        ComboItem: combosData,
      };

      const needsSeed =
        !comboDoc ||
        !comboDoc.ComboItem ||
        comboDoc.ComboItem.length === 0 ||
        !comboDoc.ComboItem[0].originalInternetSpeed ||
        !comboDoc.ComboItem.some((item: any) => item.invoiceDiscount && item.invoiceDiscount > 0);

      if (needsSeed) {
        console.log(
          "Seeding/Re-seeding combos with original speed/price fields...",
        );
        if (comboDoc && comboDoc.documentId) {
          await strapi.documents(uid).update({
            documentId: comboDoc.documentId,
            data: dataToSave,
            status: "published",
          });
        } else {
          await strapi.documents(uid).create({
            data: dataToSave,
            status: "published",
          });
        }
        console.log("Combos seeded successfully!");
      } else {
        console.log("Combos already seeded. Skipping seed.");
      }

      console.log("--- Bootstrap: Checking Agent single type ---");
      const agentUid = "api::agent.agent";
      const agentDoc = await strapi.documents(agentUid).findFirst({});

      if (!agentDoc) {
        console.log("Seeding agent details...");
        await strapi.documents(agentUid).create({
          data: {
            nombre: "Jessica",
            apellido: "Ciancio",
            telefono: "+595 994 925 946",
            genero: "femenino",
          },
          status: "published",
        });
        console.log("Agent seeded successfully!");
      } else {
        console.log("Agent already seeded. Skipping.");
      }
    } catch (err) {
      console.error("Error seeding in bootstrap:", err);
    }
  },
};
