/**
 * Stick-then-fix feature for section headers on mobile
 * This script creates the sticky header effect for target sections (about, experience, projects)
 * as the user scrolls through the page.
 * Using jQuery for simpler DOM manipulation and event handling.
 */
$(document).ready(function() {
    // Only run on mobile devices
    const isMobile = $(window).width() <= 768;
    if (!isMobile) return;

    // Target sections we want to create sticky headers for
    const targetSections = ['about', 'skills', 'experience', 'projects'];
    
    // Create a sticky header container that will be updated as we scroll
    const $stickyHeaderContainer = $('<div>').addClass('sticky-section-header');
    $('body').append($stickyHeaderContainer);

    // Track the section headers and their positions
    const sectionHeaders = {};
    let lastScrollPosition = $(window).scrollTop();
    let scrollDirection = 'down';
    
    // Initialize section data with more precise boundaries
    function initSections() {
        $.each(targetSections, function(i, sectionId) {
            const $section = $('#' + sectionId);
            if ($section.length) {
                const $header = $section.find('h2');
                if ($header.length) {
                    // Find the next section to determine the end boundary
                    const sectionIndex = targetSections.indexOf(sectionId);
                    let endBoundary = null;
                    
                    if (sectionIndex < targetSections.length - 1) {
                        const nextSectionId = targetSections[sectionIndex + 1];
                        const $nextSection = $('#' + nextSectionId);
                        if ($nextSection.length) {
                            endBoundary = $nextSection.offset().top;
                        }
                    }
                    
                    if (!endBoundary) {
                        // If no next section, use the end of this section
                        endBoundary = $section.offset().top + $section.outerHeight();
                    }

                    // Store section data with precise boundaries
                    sectionHeaders[sectionId] = {
                        $section: $section,
                        $header: $header,
                        top: $section.offset().top,
                        bottom: endBoundary,
                        height: $section.outerHeight()
                    };
                    
                    // Add specific landmarks for the about section
                    if (sectionId === 'about') {
                        const $skills = $('#skills');
                        if ($skills.length) {
                            sectionHeaders[sectionId].bottom = $skills.offset().top;
                        }
                    }
                    
                    // Add specific landmarks for the skills section
                    if (sectionId === 'skills') {
                        const $experience = $('#experience');
                        if ($experience.length) {
                            sectionHeaders[sectionId].bottom = $experience.offset().top;
                        }
                    }
                    
                    // Add specific landmarks for the experience section
                    if (sectionId === 'experience') {
                        const $projects = $('#projects');
                        if ($projects.length) {
                            sectionHeaders[sectionId].bottom = $projects.offset().top;
                        }
                    }
                }
            }
        });
    }

    // Get current section based on scroll position with more precise detection
    function getCurrentSection(scrollY) {
        let currentSection = null;
        
        $.each(targetSections, function(i, sectionId) {
            const sectionData = sectionHeaders[sectionId];
            if (!sectionData) return true; // continue
            
            // Update position data
            sectionData.top = sectionData.$section.offset().top;
            
            // Update bottom boundary based on the next section
            const sectionIndex = targetSections.indexOf(sectionId);
            if (sectionIndex < targetSections.length - 1) {
                const nextSectionId = targetSections[sectionIndex + 1];
                const $nextSection = $('#' + nextSectionId);
                if ($nextSection.length) {
                    sectionData.bottom = $nextSection.offset().top;
                } else {
                    sectionData.bottom = sectionData.top + sectionData.$section.outerHeight();
                }
            } else {
                sectionData.bottom = sectionData.top + sectionData.$section.outerHeight();
            }
            
            sectionData.height = sectionData.$section.outerHeight();
            
            // Check if we're in this section
            if (scrollY >= sectionData.top - 50 && scrollY < sectionData.bottom - 20) {
                // We're in this section
                currentSection = sectionData;
                return false; // break
            }
        });
        
        return currentSection;
    }
    
    // Get the next or previous section based on current section and scroll direction
    function getAdjacentSection(currentSection, direction) {
        if (!currentSection) return null;
        
        const currentIndex = targetSections.indexOf(currentSection.$section.attr('id'));
        if (direction === 'down' && currentIndex < targetSections.length - 1) {
            const nextSectionId = targetSections[currentIndex + 1];
            return sectionHeaders[nextSectionId];
        } else if (direction === 'up' && currentIndex > 0) {
            const prevSectionId = targetSections[currentIndex - 1];
            return sectionHeaders[prevSectionId];
        }
        
        return null;
    }

    // Function to update the sticky header based on scroll position
    function updateStickyHeader() {
        const scrollY = $(window).scrollTop();
        
        // Determine scroll direction
        scrollDirection = scrollY > lastScrollPosition ? 'down' : 'up';
        lastScrollPosition = scrollY;
        
        // Get current section
        const currentSection = getCurrentSection(scrollY);
        if (!currentSection) {
            $stickyHeaderContainer.removeClass('visible merging');
            return;
        }
        
        // Get adjacent section based on scroll direction
        const adjacentSection = getAdjacentSection(currentSection, scrollDirection);
        
        // Get the current header's position
        const headerRect = currentSection.$header[0].getBoundingClientRect();
        const sectionProgress = (scrollY - currentSection.top) / (currentSection.bottom - currentSection.top);
        
        // Handle the sticky header display
        if (scrollDirection === 'down') {
            // SCROLLING DOWN LOGIC
            if (headerRect.top <= 0 && headerRect.bottom < 0) {
                // Header is scrolled out of view - show sticky
                $stickyHeaderContainer.html(currentSection.$header.clone().get(0).outerHTML);
                $stickyHeaderContainer.addClass('visible').removeClass('merging');
                
                // Handle approaching next section
                if (adjacentSection) {
                    const nextHeaderTop = adjacentSection.top - scrollY;
                    // Start fading out as we approach the next section (within 80px)
                    if (nextHeaderTop < 80) {
                        const opacity = Math.max(0, nextHeaderTop / 80);
                        $stickyHeaderContainer.css('opacity', opacity);
                    } else {
                        $stickyHeaderContainer.css('opacity', '');
                    }
                }
                
                // If we're near the end of the section (last 10%), start fading out
                if (sectionProgress > 0.9) {
                    const opacity = Math.max(0, (1 - sectionProgress) * 10);
                    $stickyHeaderContainer.css('opacity', opacity);
                }
            } else if (headerRect.top <= 20 && headerRect.top > 0) {
                // Header is partially visible at the top - merge effect
                $stickyHeaderContainer.removeClass('visible').addClass('merging');
            } else {
                // Header is fully visible or not yet reached
                $stickyHeaderContainer.removeClass('visible merging');
            }
        } else {
            // SCROLLING UP LOGIC
            if (headerRect.top < 0) {
                // Current section header is above viewport - show sticky
                $stickyHeaderContainer.html(currentSection.$header.clone().get(0).outerHTML);
                $stickyHeaderContainer.addClass('visible').removeClass('merging');
                
                // If we're very close to the original header, start merging
                if (headerRect.top > -30) {
                    const opacity = Math.max(0, Math.abs(headerRect.top) / 30);
                    $stickyHeaderContainer.css('opacity', opacity);
                } else {
                    $stickyHeaderContainer.css('opacity', '');
                }
                
                // If we're near the beginning of the section (first 10%), start fading in
                if (sectionProgress < 0.1) {
                    const opacity = Math.min(1, sectionProgress * 10);
                    $stickyHeaderContainer.css('opacity', opacity);
                }
            } else {
                // Current section header is visible
                $stickyHeaderContainer.removeClass('visible');
            }
            
            // Handle approaching previous section
            if (adjacentSection) {
                const adjacentHeaderBottom = adjacentSection.bottom - scrollY;
                if (adjacentHeaderBottom > $(window).height() - 80 && !$stickyHeaderContainer.hasClass('visible')) {
                    // We're getting close to the previous section, prepare to show its header
                    $stickyHeaderContainer.html(adjacentSection.$header.clone().get(0).outerHTML);
                    $stickyHeaderContainer.addClass('visible');
                    
                    // Calculate opacity based on how close we are
                    const distanceFromBottom = Math.max(0, $(window).height() - adjacentHeaderBottom);
                    const opacity = Math.min(1, distanceFromBottom / 80);
                    $stickyHeaderContainer.css('opacity', opacity);
                }
            }
        }
    }

    // Update positions on window resize
    function updatePositions() {
        const nowMobile = $(window).width() <= 768;
        
        // Hide the sticky header if we're not on mobile
        if (!nowMobile) {
            $stickyHeaderContainer.removeClass('visible');
            return;
        }
        
        // Update section measurements
        initSections();
        
        // Update the sticky header
        updateStickyHeader();
    }

    // Initialize
    initSections();
    
    // Simple throttling for scroll and resize events
    let scrollTimeout = null;
    let resizeTimeout = null;
    
    $(window).on('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                updateStickyHeader();
                scrollTimeout = null;
            }, 10);
        }
    });
    
    $(window).on('resize', function() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function() {
                updatePositions();
                resizeTimeout = null;
            }, 100);
        }
    });
    
    // Initial calculation
    $(window).on('load', function() {
        // Wait a bit to ensure all content is properly loaded and positioned
        setTimeout(function() {
            initSections();
            updateStickyHeader();
        }, 300);
    });
});
