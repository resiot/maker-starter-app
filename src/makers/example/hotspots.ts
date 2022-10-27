import HotspotIcon from './icon.svg'
import { MakerHotspot } from '../hotspotMakerTypes'
import ANTENNAS from './antennas'

const ExampleHotspotBLE = {
  // name: 'Add Hotspot ResIOT X1',
  icon: HotspotIcon,
  onboardType: 'BLE',
  translations: {
    en: {
      name: 'Add Hotspot ResIOT X1',
      internal: [
        {
          title: 'Step 1 Power off',
          body:
            'If you want to connect your Hotspot using WiFi you only need to connect it with the power supply cable. Instead if you want to connect it using Ethernet you will need to connect your Hotspot with the power supply cable and with an Ethernet cable to your router.\n\n If your hotspot is turned off, go to the next step.\n\nIf your hotspot is turned on, turn it off by removing the power supply and wait 10 seconds.',
          button: 'Next Step',
        },
        {
          title: 'Step 2 Power on',
          body:
            'Now turn on your hotspot and wait until the 3 top LEDs blink together, it takes about 60 seconds since the hotspot is turned on, then tap the SCAN button to start the hotspot search.',
          button: 'Scan',
        },
        /* {
          title: '[title.3]',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          button: '[finish button]',
        }, */
      ],
    },
    ja: {},
    ko: {},
    zh: {},
    it: {
      name: 'Aggiungi Hotspot ResIOT X1',
      internal: [
        {
          title: 'Step 1 Power off',
          body:
            "Se vuoi connettere il tuo Hotspot usando il WiFi lo dovrai collegare solo al cavo di alimentazione. Se invece lo vuoi connettere usando Ethernet dovrai collegare il tuo Hotspot al cavo di alimentazione e con un cavo Ethernet al tuo router.\n\nSe il tuo hotspot è spento, vai allo step successivo. Se il tuo hotspot è acceso, spegnilo rimuovendo l'alimentazione e attendi 10 secondi.",
          button: 'Avanti',
        },
        {
          title: 'Step 2 Power on',
          body:
            'Ora accendi il tuo hotspot e attendi finché i LED rosso e giallo lampeggiano insieme, poi premi sul tasto "Scansiona" per avviare la ricerca dell\'hotspot.',
          button: 'Scansiona',
        },
      ],
    },
  },
  antenna: {
    // us: ANTENNAS.EXAMPLE_US,
    default: ANTENNAS.EXAMPLE_EU,
  },
} as MakerHotspot

/* const ExampleHotspotQR = {
  name: 'Example Hotspot QR',
  icon: HotspotIcon,
  onboardType: 'QR',
  translations: {
    en: {
      externalOnboard: '[Your instructions here]',
    },
    ja: {},
    ko: {},
    zh: {},
  },
  antenna: {
    // us: ANTENNAS.EXAMPLE_US,
    default: ANTENNAS.EXAMPLE_EU,
  },
} as MakerHotspot */

export default { ExampleHotspotBLE /* , ExampleHotspotQR */ }
