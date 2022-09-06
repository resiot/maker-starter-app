// import HotspotIcon from './icon.svg'
import BluetoothIcon from './Bluetooth.svg'
// import QRIcon from './QR_icon.svg'
import { MakerHotspot } from '../hotspotMakerTypes'
import ANTENNAS from './antennas'

const ResIOTX1BLE = {
  // name: 'Example Hotspot BLE',
  name: 'Add Hotspot ResIOT X1',
  icon: BluetoothIcon,
  onboardType: 'BLE',
  translations: {
    en: {
      name: 'Add Hotspot ResIOT X1',
      internal: [
        {
          title: 'Step 1',
          body:
            'If your hotspot is turned off, go to the next step. If your hotspot is turned on, turn it off by removing the power supply and wait 10 seconds.',
          button: 'Next Step',
        },
        {
          title: 'Step 2',
          body:
            'Now turn on your hotspot and wait until the red and yellow LEDs blink together, then tap the "Scan" button to start the hotspot search.',
          button: 'Scan',
        },
        /* {
          title: '[title page 3/3]',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          button: '[finish button]',
        }, */
      ],
    },
    ja: {},
    ko: {},
    zh: {},
    /* it: {
      name: 'Aggiungi Hotspot ResIOT X1',
      internal: [
        {
          title: 'Step 1',
          body:
            'Se il tuo hotspot è spento, vai allo step successivo. Se il tuo hotspot è acceso, spegnilo rimuovendo l\'alimentazione e attendi 10 secondi.',
          button: 'Avanti',
        },
        {
          title: 'Step 2',
          body:
            'Ora accendi il tuo hotspot e attendi finché i LED rosso e giallo lampeggiano insieme, poi premi sul tasto "Scansiona" per avviare la ricerca dell\'hotspot.',
          button: 'Scansiona',
        },
      ],
    }, */
  },
  antenna: {
    // us: ANTENNAS.EXAMPLE_US,
    external68: ANTENNAS.OUTDOOR68_EU,
    external80: ANTENNAS.OUTDOOR80_EU,
    default: ANTENNAS.STANDARD_EU,
  },
} as MakerHotspot

/* const ExampleHotspotQR = {
  // name: 'Example Hotspot QR',
  icon: QRIcon,
  onboardType: 'QR',
  translations: {
    en: {
      externalOnboard: 'Visit www.resiot.io/hospotapp for more instructions',
      name: 'Add Hotspot using QR code',
    },
    ja: {},
    ko: {},
    zh: {},
    it: {
      externalOnboard: 'Visita www.resiot.io/hospotapp per ulteriori istruzioni',
      name: 'Aggiungi Hotspot con QR code',
    },
  },
  antenna: {
    us: ANTENNAS.EXAMPLE_US,
    default: ANTENNAS.EXAMPLE_EU,
  },
} as MakerHotspot */

export default { ResIOTX1BLE /* , ExampleHotspotQR */ }
