import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function GreekBusinessWebsite() {
  const [submitted, setSubmitted] = useState(false);

  const fade = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-neutral-950 dark:to-neutral-900 dark:text-neutral-100">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-950/50 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src="/logo.jpg" alt="Λογότυπο Σπιρτόκουτο" className="h-10 w-10 rounded-full" />
            <span>ΘΕΑΤΡΙΚΟ ΕΡΓΑΣΤΉΡΙ ΣΠΙΡΤΌΚΟΥΤΟ</span>
          </a>
          <ul className="hidden gap-6 text-sm sm:flex">
            <li><a href="#services" className="hover:opacity-80">Υπηρεσίες</a></li>
            <li><a href="#philosophy" className="hover:opacity-80">Φιλοσοφία</a></li>
            <li><a href="#gallery" className="hover:opacity-80">Gallery</a></li>
            <li><a href="#contact" className="hover:opacity-80">Επικοινωνία</a></li>
          </ul>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-white shadow-sm hover:shadow md:text-sm dark:bg-white dark:text-neutral-900">
            Επικοινώνησε <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <img src="/poster1.jpg" alt="Αφίσα Σπιρτόκουτο" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:py-32">
          <motion.div initial="hidden" animate="show" variants={fade}>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Θεατρικό εργαστήρι για παιδιά — παιχνίδι, φαντασία, συνεργασία
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-neutral-300">
              Από το 2007 καλλιεργούμε τη φαντασία, την επικοινωνία και τη συνεργασία 
              μέσα από θεατρικό παιχνίδι, αυτοσχεδιασμό και βιωματικές δράσεις για παιδιά.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#philosophy" className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                Διάβασε περισσότερα
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                Επικοινώνησε <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fade}>
          <h2 className="text-2xl font-bold sm:text-3xl">Τι κάνουμε στο Σπιρτόκουτο</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-neutral-300">
            Βιωματικά εργαστήρια θεάτρου για παιδιά με έμφαση στη χαρά της δημιουργίας και την ομαδικότητα.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Θεατρικό Παιχνίδι", desc: "Μίμηση, παντομίμα, παιχνίδια ρόλων και δραματοποιήσεις που ενεργοποιούν τη φαντασία." },
              { title: "Αυτοσχεδιασμός & Εκπαιδευτικό Δράμα", desc: "Βιωματικές καταστάσεις που καλλιεργούν την έκφραση, την επικοινωνία και την κριτική σκέψη." },
              { title: "Σωματική Έκφραση & Ρυθμός", desc: "Ασκήσεις ρυθμού, εμπιστοσύνης, παρατηρητικότητας, μνήμης και αισθήσεων." },
              { title: "Φωνή & Λόγος / Μουσικοκινητική", desc: "Εξάσκηση φωνής-λόγου και μουσικοκινητικές δραστηριότητες που ενισχύουν την αυτοπεποίθηση." },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-neutral-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fade}>
          <h2 className="text-2xl font-bold sm:text-3xl">Φιλοσοφία & Στόχοι</h2>
          <div className="mt-4 space-y-4 text-slate-700 dark:text-neutral-200">
            <p>Το Σπιρτόκουτο λειτουργεί από το 2007. Μέσα από το θεατρικό παιχνίδι, τη μίμηση, την παντομίμα, το εκπαιδευτικό δράμα, τις ασκήσεις (ρυθμού, εμπιστοσύνης, παρατηρητικότητας, μνήμης, αισθήσεων, φαντασίας, επικοινωνίας, συνεργασίας), τη σωματική έκφραση, την εξάσκηση φωνής-λόγου, τις μουσικοκινητικές ασκήσεις, τα παιχνίδια ρόλων, τους αυτοσχεδιασμούς και τις δραματοποιήσεις, το παιδί έρχεται σε επαφή με τον εσωτερικό του κόσμο αλλά και το περιβάλλον του.</p>
            <p>Εκφράζεται και διοχετεύει δημιουργικά την ενέργειά του, ενώ ενδυναμώνεται η αίσθηση της ομαδικότητας και ενισχύεται η σκέψη του, τα συναισθήματά του και κυρίως η φαντασία του. Το παιδί καταφέρνει να εξωτερικεύει προσωπικές εμπειρίες, ιδέες και συναισθήματα σε ποικίλες εκφραστικές μορφές και να εκφράζει ελεύθερα τον ψυχικό του κόσμο και την προσωπική του άποψη.</p>
            <p>Στόχος μας είναι, μέσα από βιωματικές δραστηριότητες, τα παιδιά να ανακαλύψουν τον εαυτό τους και να καλλιεργήσουν δεξιότητες επικοινωνίας και συνεργασίας, εκτονώνοντας δημιουργικά την ενεργητικότητά τους — πάντα με σταθερό μας άξονα το θέατρο.</p>
            <p>Το θεατρικό παιχνίδι δεν είναι μόνο ψυχαγωγία· είναι μέρος της παιδαγωγικής πρακτικής. Αποτελεί μέσο ενεργοποίησης και απελευθέρωσης της φαντασίας, ευαισθητοποίησης και καλλιέργειας της ψυχοκινητικής έκφρασης του παιδιού.</p>
            <p>Η ενασχόληση με το θέατρο από μικρή ηλικία βοηθά τα παιδιά να εξωτερικεύουν τα συναισθήματά τους και να αναπτύσσουν κοινωνικές δεξιότητες, συμβάλλει στη συνολική μόρφωση και εκπαίδευσή τους και προσφέρει ποικιλία γνώσεων. Μαθαίνουν να ζουν σε ομάδες, να συζητούν και να ανταλλάσσουν ιδέες, να ενισχύουν την αυτοεκτίμησή τους και να εμπιστεύονται σταδιακά τις ικανότητές τους. Μαθαίνουν να εκτιμούν την αισθητική και αποκτούν κίνητρο να ερευνήσουν και να γνωρίσουν τον κόσμο με χαρά και ενθουσιασμό.</p>
            <p>Η διαδικασία της πρόβας διδάσκει πειθαρχία. Τα θετικά συναισθήματα που γεννά η επαφή με το θέατρο γίνονται οδηγός για μια καλύτερη ζωή. Η ΦΑΝΤΑΣΙΑ βγάζει το παιδί από το «στενό κουτί», επιτρέποντάς του να είναι δημιουργικό και να χρησιμοποιεί την κριτική του σκέψη. Όπως είπε ο Αϊνστάιν: «η φαντασία είναι πιο σημαντική από τη γνώση».</p>
            <p>Το παιδί βιώνει την ενσυναίσθηση — την ικανότητα να μπαίνει στη θέση κάποιου άλλου, να κρίνει και να εμπλέκεται συναισθηματικά μαζί του — βασική λειτουργία του ρόλου, ως τρόπο για να αποκτήσει αυτογνωσία και να γίνει καλύτερος άνθρωπος. Αντιλαμβάνεται το θέατρο ως ένα σύστημα συντελεστών όπου ο καθένας έχει ζωτικό και ισότιμης αξίας ρόλο για την επίτευξη του στόχου: της παράστασης.</p>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fade}>
          <h2 className="text-2xl font-bold sm:text-3xl">Gallery</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-neutral-300">Αφίσες και υλικό του Θεατρικού Εργαστηρίου Σπιρτόκουτο.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["/poster1.jpg","/logo.jpg","/program2024.jpg"].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-neutral-900">
                <img src={src} alt={`Poster ${i+1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fade}>
          <h2 className="text-2xl font-bold sm:text-3xl">Επικοινωνία</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-neutral-300">
            Πείτε μας λίγα λόγια για το έργο σας και θα επανέλθουμε άμεσα.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900" aria-label="Φόρμα επικοινωνίας">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm">Ονοματεπώνυμο</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-neutral-800" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-neutral-800" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm">Μήνυμα</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-white/10 dark:bg-neutral-800" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                Στείλε Μήνυμα
              </button>
              {submitted && (
                <p role="status" className="mt-3 text-sm text-green-600 dark:text-green-400">Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα.</p>
              )}
            </form>
            <div className="flex flex-col justify-between gap-6 rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
              <div>
                <h3 className="font-semibold">Στοιχεία επικοινωνίας</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> elena_peppa@yahoo.com</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 6979916117</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Αθήνα, Ελλάδα</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10 text-sm dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p className="text-slate-600 dark:text-neutral-300">© {new Date().getFullYear()} ΘΕΑΤΡΙΚΟ ΕΡΓΑΣΤΉΡΙ ΣΠΙΡΤΌΚΟΥΤΟ. Με την επιφύλαξη παντός δικαιώματος.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:opacity-80">Υπηρεσίες</a>
            <a href="#philosophy" className="hover:opacity-80">Φιλοσοφία</a>
            <a href="#gallery" className="hover:opacity-80">Gallery</a>
            <a href="#contact" className="hover:opacity-80">Επικοινωνία</a>
          </div>
        </div>
      </footer>
    </div>
  );
}