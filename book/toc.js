// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded "><a href="installation/installation.html"><strong aria-hidden="true">1.</strong> Installation</a></li><li class="chapter-item expanded "><a href="basics/basics.html"><strong aria-hidden="true">2.</strong> Basics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="basics/simulations.html"><strong aria-hidden="true">2.1.</strong> Simulation</a></li><li class="chapter-item expanded "><a href="basics/vanet.html"><strong aria-hidden="true">2.2.</strong> VANET</a></li></ol></li><li class="chapter-item expanded "><a href="design/design.html"><strong aria-hidden="true">3.</strong> Design Choices</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="design/mobility.html"><strong aria-hidden="true">3.1.</strong> Mobility</a></li><li class="chapter-item expanded "><a href="design/links.html"><strong aria-hidden="true">3.2.</strong> Links</a></li><li class="chapter-item expanded "><a href="design/streams.html"><strong aria-hidden="true">3.3.</strong> Streams</a></li><li class="chapter-item expanded "><a href="design/messages.html"><strong aria-hidden="true">3.4.</strong> Messages</a></li><li class="chapter-item expanded "><a href="design/discrete.html"><strong aria-hidden="true">3.5.</strong> Discrete-time</a></li></ol></li><li class="chapter-item expanded "><a href="software/architecture.html"><strong aria-hidden="true">4.</strong> Architecture</a></li><li class="chapter-item expanded "><a href="library/library.html"><strong aria-hidden="true">5.</strong> Library</a></li><li class="chapter-item expanded "><a href="producers/producers.html"><strong aria-hidden="true">6.</strong> Producers</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="producers/links.html"><strong aria-hidden="true">6.1.</strong> Links</a></li><li class="chapter-item expanded "><a href="producers/positions.html"><strong aria-hidden="true">6.2.</strong> Positions</a></li></ol></li><li class="chapter-item expanded "><a href="simulators/simulators.html"><strong aria-hidden="true">7.</strong> Simulators</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="simulators/v2x.html"><strong aria-hidden="true">7.1.</strong> V2X</a></li><li class="chapter-item expanded "><a href="simulators/fl.html"><strong aria-hidden="true">7.2.</strong> FL</a></li></ol></li><li class="chapter-item expanded "><a href="workflow/workflow.html"><strong aria-hidden="true">8.</strong> Workflow</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
