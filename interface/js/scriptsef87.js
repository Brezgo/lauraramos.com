$(document).ready(function(){

	/***************************************************************
		Safari CSS
	***************************************************************/

		var ua = navigator.userAgent.toLowerCase(); 
		if ( ua.indexOf('safari') != -1 ) {
			if ( ua.indexOf('chrome') == -1 ) {
				if ( $(".about-image").length ) {
					var image = $(".about-image").css("background-image");
					image = image.replace("webp", "jpg");
					$(".about-image").css("background-image", image);
				}
				if ( $(".works-item-background").length ) {
					$(".works-item-background").each(function(){
						var image = $(this).css("background-image");
						image = image.replace("webp", "jpg");
						$(this).css("background-image", image);
					});
				}
				if ( $(".project-header").length ) {
					var image = $(".project-header").css("background-image");
					image = image.replace("webp", "jpg");
					$(".project-header").css("background-image", image);
				}
				if ( $(".mockup").length ) {
					$(".mockup").each(function(){
						var image = $(this).find("img").attr("src");
						if ( $(this).hasClass("mockuppng") ) {
							image = image.replace("webp", "png");
						} else {
							image = image.replace("webp", "jpg");
						}
						$(this).find("img").attr("src", image);
					});
				}
			}
		}



	/***************************************************************
		Menu Open/Close
	***************************************************************/

		var menuCanChange = true;
		$(".hamburger").on("click", function(){
			if ( menuCanChange ) {
				menuCanChange = false;
				if ( !$(this).hasClass("active") ) {

					$(this).addClass("active");
					$(".menu-wrapper").toggleClass("active");
					setTimeout(function(){
						$(".menu-navigation ul li").each(function(index){
							var that = $(this);
							setTimeout(function(){
								that.addClass("enter");
							}, (80*index));
						});
						setTimeout(function(){
							menuCanChange = true;
						}, 500);
					}, 500);

				} else {

					var that = $(this);

					$(".menu-navigation ul li").removeClass("enter");
					setTimeout(function(){
						$(".menu-wrapper").addClass("close");
						that.removeClass("active");
						setTimeout(function(){
							$(".menu-wrapper").removeClass("active close");
							menuCanChange = true;
						}, 300);
					}, 150);

				}
			}
		});



	/***************************************************************
		Menu Choose
	***************************************************************/

		$(".menu-navigation a:not(.external)").on("click", function(event){
			event.preventDefault();
			var linkURL = "https://www.annanuna.co.il/" + $(this).attr("href");
			$(".menu-wrapper").addClass("move");
			setTimeout(function(){
				window.location.href = linkURL;
				if ( $(".homepage").length ) {
					window.location.reload();
				}
			}, 400);
		});



	/***************************************************************
		Chat Message
	***************************************************************/

		if ( window.innerWidth <= 480 ) {
			var chatMessage = "הקלד את ההודעה";
		} else {
			var chatMessage = "הקלד את ההודעה ולחץ 'Enter' לשליחה...";
		}
		$(".chat-footer-box textarea").attr("placeholder", chatMessage);



	/***************************************************************
		Open Chat
	***************************************************************/

		var chatStage;
		var chatSubject;
		var chatText;
		var chatUserName;
		var chatUserEmail;

		// $("#openChat").on("click", function(){
		// 	$(".chat-window").fadeIn(300);
		// 	$(".wrapper").addClass("blur");
		// 	resetChat();
		// 	setTimeout(function(){
		// 		openChat();
		// 	}, 700);
		// });



	/***************************************************************
		Close Chat
	***************************************************************/

		$("#closeChat").on("click", function(){
			$(".chat-window").fadeOut(300);
			$(".wrapper").removeClass("blur");
		});



	/***************************************************************
		Close Chat
	***************************************************************/

		function resetChat() {
			$(".chat-footer").show();
			$(".chat-body").html("");
			$(".chat textarea").val("");
			chatStage = 1;
			chatSubject = "";
			chatText = [];
		}



	/***************************************************************
		Chat Stage 1 - Welcome - Get Name
	***************************************************************/

		function openChat() {
			var html = '<div class="chat-message-wrapper"><div class="chat-message chat-message-bot"><div>';
			html += 'שלום אני קיפי, הצ\'ט-בוט של אננונה<br> אני כאן כדי לעזור לך במה שאת/ה צריכ/ה<br> לפני שנמשיך, איך אני יכול לקרוא לך?';
			html += '</div></div></div>';
			$(html).appendTo( $(".chat-body") );
			setTimeout(function(){
				$(".chat-body > div:last-of-type").addClass("active");
			}, 1);
			$(".chat-body").scrollTop( $(".chat-body")[0].scrollHeight );

			$(".chat textarea").focus();
		}



	/***************************************************************
		Chat Stage 2 - Name - Get Email
	***************************************************************/

		function chatStage2() {
			var html = '<div class="chat-message-wrapper"><div class="chat-message chat-message-bot"><div>';
			html += 'היי ' + chatUserName + ', נעים להכיר!<br> כדי שאני אוכל לשלוח נציג שיחזור אליך, אשמח שתתנ/י לי את כתובת המייל שלך';
			html += '</div></div></div>';
			$(html).appendTo( $(".chat-body") );
			setTimeout(function(){
				$(".chat-body > div:last-of-type").addClass("active");
			}, 1);
			$(".chat-body").scrollTop( $(".chat-body")[0].scrollHeight );

			$(".chat textarea").focus();
		}



	/***************************************************************
		Chat Stage 3 - Email - Get Subject
	***************************************************************/

		function chatStage3() {
			var html = '<div class="chat-message-wrapper"><div class="chat-message chat-message-bot"><div>';
			html += 'מעולה!<br> תנ/י לי כמה מילים בקצרה לתיאור נושא הפנייה שלך?';
			html += '</div></div></div>';
			$(html).appendTo( $(".chat-body") );
			setTimeout(function(){
				$(".chat-body > div:last-of-type").addClass("active");
			}, 1);
			$(".chat-body").scrollTop( $(".chat-body")[0].scrollHeight );
			
			$(".chat textarea").focus();
		}



	/***************************************************************
		Chat Stage 3 - Subjct - Get Message
	***************************************************************/

		function chatStage4() {
			var html = '<div class="chat-message-wrapper"><div class="chat-message chat-message-bot"><div>';
			html += 'מהמם!<br> עכשיו את/ה יכול/ה לכתוב בהרחבה איך אני יכול לעזור לך, ככל שתפרט/י יותר אוכל לטפל בפנייה ביעילות ומהירות.<br> לסיום ושליחה הקלד/י בהודעה נפרדת את המילה "סיימתי"';
			html += '</div></div></div>';
			$(html).appendTo( $(".chat-body") );
			setTimeout(function(){
				$(".chat-body > div:last-of-type").addClass("active");
			}, 1);
			$(".chat-body").scrollTop( $(".chat-body")[0].scrollHeight );
			
			$(".chat textarea").focus();
		}



	/***************************************************************
		Chat End
	***************************************************************/

		function endChat() {
			// Remove Footer
			$(".chat-footer").fadeOut(function(){
				// Print Thank Message
				var html = '<div class="chat-message-wrapper"><div class="chat-message chat-message-bot"><div>';
				html += 'תודה ' + chatUserName + '!<br> אני מיד שולח את הפנייה לנציגים שלנו, ומייל ישלח לכתובת שנתת לי בהקדם האפשרי';
				html += '</div></div></div>';
				$(html).appendTo( $(".chat-body") );
				setTimeout(function(){
					$(".chat-body > div:last-of-type").addClass("active");
				}, 1);
				$(".chat-body").scrollTop( $(".chat-body")[0].scrollHeight );
			});

			// Send Form To Mail
			sendChat();
		}



	/***************************************************************
		Chat Check Message Send
	***************************************************************/

		$(".chat-window textarea").keydown(function(e) {
			if ( e.keyCode == 13 ) {
				if ( e.shiftKey ) {
					return true;
				} else {
					e.preventDefault();
					if ( $(".chat-footer-box textarea").val() == "" ) {
						$(".chat-footer-box textarea").addClass("error");
					} else {
						submitMessage();
					}
				}
			}
		});


		$(".chat-send").on("click", function(e) {
			if ( $(".chat-footer-box textarea").val() == "" ) {
				$(".chat-footer-box textarea").addClass("error");
			} else {
				submitMessage();
			}
		});

		

	/***************************************************************
		Chat Send User Message
	***************************************************************/

		function submitMessage() {
			$(".chat-footer-box textarea").removeClass("error");
			// Add Message To View
			if ( chatStage != 4 ) {
				var html = '<div class="chat-message-wrapper">';
			}	else {
				if ( chatText.length == 0) {
					var html = '<div class="chat-message-wrapper">';
				} else {
					var html = '';
				}
			}

			html += '<div class="chat-message chat-message-user"><div>';
			html += $(".chat-window textarea").val().replace(/\n/g, "<br />");
			html += '</div></div>';

			if ( chatStage != 4 ) {
				html += '</div>';
			} else {
				if ( chatText.length == 0) {
					html += '</div>';
				}
			}

			if ( chatStage != 4 ) {
				var pointer = $(html).appendTo( $(".chat-body") );
			} else {
				if ( chatText.length == 0) {
					var pointer = $(html).appendTo( $(".chat-body") );
				} else {
					var pointer = $(html).appendTo( $(".chat-body .chat-message-wrapper:last-of-type") );
				}
			}

			setTimeout(function(){
				$(pointer).addClass("active");
			}, 1);
			$(".chat-body").scrollTop( $(".chat-body")[0].scrollHeight );

			// Add Message To Variables
			if ( chatStage == 1 ) {
				chatStage = 2;
				chatUserName = $(".chat-window textarea").val().replace(/\n/g, "<br />");
				setTimeout(chatStage2, 700);
			} else if ( chatStage == 2 ) {
				chatStage = 3;
				chatUserEmail = $(".chat-window textarea").val().replace(/\n/g, "<br />");
				setTimeout(chatStage3, 700);
			} else if ( chatStage == 3 ) {
				chatStage = 4;
				chatSubject = $(".chat-window textarea").val().replace(/\n/g, "<br />");
				setTimeout(chatStage4, 700);
			} else {
				if ( $(".chat-window textarea").val() != "סיימתי" ) {
					chatText.push( $(".chat-window textarea").val().replace(/\n/g, "<br />") );
				} else {
					setTimeout(endChat, 300);
				}
			}

			// Reset Textarea
			$(".chat-window textarea").val("");
		}



	/***************************************************************
		Send Chat
	***************************************************************/
		
		function sendChat() {
			var data = [
				{
					"name": "name",
					"value": chatUserName
				},
				{
					"name": "email",
					"value": chatUserEmail
				},
				{
					"name": "subject",
					"value": chatSubject
				},
				{
					"name": "message",
					"value": "&middot; " + chatText.join(" <br />&middot; ")
				}
			];

			$.ajax("interface/form.php", {
				method: "POST",
				async: false,
				data: data
			});
		}



	/***************************************************************
		Go To Place
	***************************************************************/

		$("#goWorks").on("click", function(){
			scrollingNow = true;
			hideSection1();
			window.location.hash = "#works";
			setTimeout(showSection2, 850);
			currentSection++;
		});



	/***************************************************************
		Works Drag
	***************************************************************/

		// Works Variables
		var worksMouseRelease = true;

		class Swipe {
			constructor() {
				// log('constructor')
				this.$doc = $(".works")
				// this.$item = $("#worksLOG")
				this.pointer = { 
					x: {
						start: null,
						current: null,
						eased: null,
						delta: 0
					}, 
					y: {
						start: null,
						current: null,
						eased: null,
						delta: 0
					}
				}
				this.easeRatio = 0.5
				this.isDown = false
				this.isAnimating = false
				this.direction = null
			}
			
			
			/**
			 * Init the class by binding events to the document
			 */
			init() {
				// log('init')
				this.$doc.on('touchstart', this.touchstartHandler.bind(this))
				this.$doc.on('mousedown', this.mousedownHandler.bind(this))
				// this.print(this)
			}

			
			/**
			 * Start to move, set all values
			 * and start the loop
			 */
			start(x, y) {
				// log('start')
				this.pointer.x.start = x
				this.pointer.x.current = x
				this.pointer.x.eased = x
				this.pointer.y.start = y
				this.pointer.y.current = y
				this.pointer.y.eased = y
				this.isDown = true
				this.isAnimating = true
				this.tick()
			}
			
			
			/**
			 * End of the event, reset all values
			 */
			end() {
				// log('end')
				this.pointer = { 
					x: {
						start: null,
						current: null,
						eased: null,
						delta: 0
					}, 
					y: {
						start: null,
						current: null,
						eased: null,
						delta: 0
					}
				}
				this.direction = null
				// this.print(this)
			}
			
			
			/**
			 * The main loop function
			 */
			tick() {
				// log('tick')
				
				// End if not moving nor animating
				if (!this.isDown && !this.isAnimating) {
					this.end()
					return false
				}
				
				
				const x = this.pointer.x
				const y = this.pointer.y 
				
				// If mouse is down or properties are easing
				if (this.isDown || this.isAnimating) {
					
					// DO STUFF HERE
					if (x.delta > 0) {
						this.direction = 'to the right'
					} else if (x.delta < 0) {
						this.direction = 'to the left'
					}
					// END DO STUFF HERE
					
					// Update delta
					x.delta = x.current - x.start
					y.delta = y.current - y.start
					
					if ( this.isDown && this.isAnimating && worksMouseRelease ) {
						if ( x.delta > 50 ) {
							worksMouseRelease = false;
							worksPrevious();
						} else if ( x.delta < -50 ) {
							worksMouseRelease = false;
							worksNext();
						}
					}

					// Update eased property
					x.eased += (x.current - x.eased) * this.easeRatio
					y.eased += (y.current - y.eased) * this.easeRatio
					
					// Round eased property if close enough to target value
					if (Math.abs(x.current - x.eased) < 0.1) x.eased = x.current
					if (Math.abs(y.current - y.eased) < 0.1) y.eased = y.current 
					
					// End smoothing if both eased properties
					// are the same as their target value
					if (x.eased === x.current && y.eased === y.current) {
						this.isAnimating = false
					}
					
					// Display value in DOM
					// this.print(this)
					
					// Re-tick on next frame
					requestAnimationFrame(this.tick.bind(this))
				}
			}
			

			/**
			 * Handler for the `mousedown` event
			 * 
			 * @param Object e The event's object
			 */
			mousedownHandler(e) {
				// log('mousedownHandler')
				
				// Bind events
				this.$doc.on('mousemove', this.mousemoveHandler.bind(this))
				this.$doc.one('mouseup', (e) => {
					this.$doc.off('mousemove', this.mousemoveHandler)
					this.isDown = false;
					worksMouseRelease = true;
				})
				
				const x = e.clientX
				const y = e.clientY
				this.start(x, y);
			}

			
			/**
			 * Handler for the `touchmove` event
			 * 
			 * @param Object e The event's object
			 */
			mousemoveHandler(e) {
				// log('mousemoveHandler')
				this.pointer.x.current = e.clientX
				this.pointer.y.current = e.clientY
				this.isAnimating = true
			}
			
			
			/**
			 * Handler for the `touchstart` event
			 * 
			 * @param Object e The event's object
			 */
			touchstartHandler(e) {
				// log('touchstartHandler')
				this.$doc.on('touchmove', this.touchmoveHandler.bind(this))
				this.$doc.one('touchend', (e) => {
					this.$doc.off('touchmove', this.touchemoveHandler)
					this.isDown = false;
					worksMouseRelease = true;
				})
				
				const touch = e.touches[0]
				const x = touch.clientX
				const y = touch.clientY
				this.start(x, y)
			}
			
			
			/**
			 * Handler for the `touchmove` event
			 *
			 * @param Object e The event's object
			 */
			touchmoveHandler(e) {
				// log('touchmoveHandler')
				// Get first touch item
				const touch = e.touches[0]
				this.pointer.x.current = touch.clientX
				this.pointer.y.current = touch.clientY
				this.isAnimating = true
			}
			
			
			// print(obj) {
			// 	const string = JSON.stringify(obj, this.filter, 2).replace(/"/g, '')
			// 	this.$item.html(string);
			// }
			// filter(key, value) {
			// 	return key !== '$doc' && key !== '$pre' ? value : undefined
			// }
		}


		// Init
		const swipe = new Swipe()
		swipe.init()



	/***************************************************************
		Works Next Prev
	***************************************************************/

		var worksCurrentItem = 1;
		var worksSliderCanMoving = true;
		var worksLength = $(".works-item").length;

		// Make Works
		if ( window.innerWidth >= 1200 ) {
			var worksTrackWidth = (50 * worksLength) + "vw";
		} else {
			var worksTrackWidth = (74 * worksLength) + "vw";
		}
		$(".works-track").css("width", worksTrackWidth);
		// var newTransform = 'translate3d(' + (newTransform+125) + 'vw, 0px, 0px)';
		// console.log( newTransform );
		// $(".works-track").css("transform", newTransform);

		function worksNext() {
			if ( worksSliderCanMoving && worksCurrentItem != worksLength ) {
				worksSliderCanMoving = false;
				worksCurrentItem++;
				if ( window.innerWidth >= 1200 ) {
					var newTransform = worksCurrentItem*-50;
					newTransform = 'translate3d(' + (newTransform+75) + 'vw, 0px, 0px)';
				} else {
					var newTransform = worksCurrentItem*-74;
					newTransform = 'translate3d(' + (newTransform+87) + 'vw, 0px, 0px)';
				}
				$(".works-track").css("transform", newTransform);
				setTimeout(function(){
					worksSliderCanMoving = true;
				}, 1000);
				var next = $(".works-item.active").next();
				$(".works-item.active").removeClass("active");
				next.addClass("active");
			}
		}


		function worksPrevious() {
			if ( worksSliderCanMoving && worksCurrentItem != 1 ) {
				worksSliderCanMoving = false;
				worksCurrentItem--;
				if ( window.innerWidth >= 1200 ) {
					var newTransform = worksCurrentItem*-50;
					newTransform = 'translate3d(' + (newTransform+75) + 'vw, 0px, 0px)';
				} else {
					var newTransform = worksCurrentItem*-74;
					newTransform = 'translate3d(' + (newTransform+87) + 'vw, 0px, 0px)';
				}
				$(".works-track").css("transform", newTransform);
				setTimeout(function(){
					worksSliderCanMoving = true;
				}, 1000);
				var prev = $(".works-item.active").prev();
				$(".works-item.active").removeClass("active");
				prev.addClass("active");
			}
		}



	/***************************************************************
		Works - Choose Project
	***************************************************************/

		$(".works-item a").on("click", function(event){
			event.preventDefault();
			var linkURL = $(this).attr("href");

			var workTop = $(".works-item.active").offset().top;
			var workLeft = $(".works-item.active").offset().left;
			var workWidth = $(".works-item.active").width();
			var workHeight = $(".works-item.active").height();
			var workBackground = $(".works-item.active .works-item-background").css("background-image");


			if ( window.innerWidth < 992 ) {
				workTop = workTop - $(window).scrollTop();
			}

			$(".works-item.active").addClass("open");

			setTimeout(function(){
				$("#worksDuplicate").css({
					"top": workTop,
					"left": workLeft,
					"width": workWidth,
					"height": workHeight,
					"background-image": workBackground
				});

				setTimeout(function(){
					$("#worksDuplicate").addClass("active");
					setTimeout(function(){
						window.location.href = linkURL;
					}, 600);
				}, 50);
			}, 300);
		});



	/***************************************************************
		Open Project
	***************************************************************/

		if ( $(".project-header").length ) {
			$(".project-header").addClass("active");
		}



	/***************************************************************
		Project Mockups
	***************************************************************/

		if ( $(".mockup").length ) {
			checkMockups();
			$(window).scroll(checkMockups);
			function checkMockups() {
				var fromTop = $(window).scrollTop();
				var windowHeight = $(window).height();
				$(".mockup").each(function(){
					var mockupTop = $(this).offset().top;
					if ( fromTop+windowHeight > mockupTop+200 ) {
						$(this).addClass("active")
					}
				});
			}

			checkNext();
			$(window).scroll(checkNext);
			function checkNext() {
				var fromTop = $(window).scrollTop();
				var windowHeight = $(window).height();
				var nextTop = $(".project-next").offset().top;
				if ( fromTop+windowHeight > nextTop ) {
					$(".lines").addClass("hide");
				} else {
					$(".lines").removeClass("hide");
				}
			}
		}



	/***************************************************************
		Scrolling
	***************************************************************/

		if ( $(".homepage").length ) {
			var scrollingNow = true;
			var currentSection = 1;

			var pageHash = window.location.hash;
			switch ( pageHash ) {
				case "":
					currentSection = 1;
				break;

				case "#home":
					currentSection = 1;
				break;

				case "#works":
					currentSection = 2;
				break;

				case "#about":
					currentSection = 3;
				break;

				case "#sugar":
					currentSection = 4;
				break;
			}
		}

		document.addEventListener('wheel', function(e) {
			if ( $(".homepage").length ) {
				if ( window.innerWidth >= 992 ) {
					if ( !scrollingNow ) {
						scrollingNow = true;
						if ( e.wheelDeltaY < 0 ) {
							switch ( currentSection ) {
								case 1:
									hideSection1();
									window.location.hash = "#works";
									setTimeout(showSection2, 850);
									currentSection++;
								break;
								case 2:
									hideSection2();
									window.location.hash = "#about";
									setTimeout(showSection3, 1450);
									currentSection++;
								break;
								case 3:
									hideSection3();
									window.location.hash = "#sugar";
									setTimeout(function(){
										showSection4();
										$(".lines").addClass("hide");
									}, 2050);
									currentSection++;
								break;
								case 4:
									scrollingNow = false;
								break;
							}
						} else {
							switch ( currentSection ) {
								case 1:
									scrollingNow = false;
								break;
								case 2:
									hideSection2();
									window.location.hash = "#home";
									setTimeout(showSection1, 1450);
									currentSection--;
								break;
								case 3:
									hideSection3();
									window.location.hash = "#works";
									setTimeout(showSection2, 2050);
									currentSection--;
								break;
								case 4:
									hideSection4();
									window.location.hash = "#about";
									setTimeout(function(){
										showSection3();
										$(".lines").removeClass("hide");
									}, 1850);
									currentSection--;
								break;
							}
						}
					}
				}
			}
		});

		document.addEventListener('scroll', function(e) {
			if ( $(".homepage").length ) {
				if ( window.innerWidth < 992 ) {
					var fromTop = $(window).scrollTop();
					var windowHeight = $(window).height();
					var worksTop = $(".works").offset().top;
					var worksHeight = $(".works").height();
					var aboutTop = $(".about").offset().top;
					var aboutHeight = $(".about").height();
					var partnersTop = $(".partners").offset().top;
					var partnersHeight = $(".partners").height();

					if ( fromTop >= 0 ) {
						showSection1();
					}
					if ( (fromTop+windowHeight) >= (worksTop+(worksHeight/2)) ) {
						showSectionMobile2();
					}
					if ( (fromTop+windowHeight) >= (aboutTop+(aboutHeight/2)) ) {
						showSectionMobile3();
					}
					if ( (fromTop+windowHeight) >= (partnersTop+(partnersHeight/2)) ) {
						showSectionMobile4();
					}

					if ( fromTop >= 0 && fromTop < worksTop ) {
						window.location.hash = "#home";
					} else if ( fromTop >= worksTop && fromTop < aboutTop ) {
						window.location.hash = "#works";
					} else if ( fromTop >= aboutTop && fromTop < partnersTop ) {
						window.location.hash = "#about";
					} else {
						window.location.hash = "#sugar";
					}

					if ( (fromTop+windowHeight+50) >= (partnersTop+partnersHeight) ) {
						$(".lines").addClass("hide");
					} else {
						$(".lines").removeClass("hide");
					}
				}
			}
		});



	/***************************************************************
		Scrolling - Hide
	***************************************************************/

		function hideSection1() {
			$(".opening-content").removeClass("active");
			setTimeout(function(){
				$(".opening-background").removeClass("active");
				setTimeout(function(){
					$(".opening").hide();
				}, 650);
			}, 200);
		}

		function hideSection2() {
			$(".works-list").addClass("fade");
			setTimeout(function(){
				$(".works .background-title").removeClass("active");
				setTimeout(function(){
					$(".works").hide();
				}, 850);
			}, 600);
		}

		function hideSection3() {
			$(".about-image").removeClass("active");
			setTimeout(function(){
			$(".about-text").removeClass("active");
				setTimeout(function(){
					$(".about .background-title").removeClass("active");
					setTimeout(function(){
						$(".about").hide();
					}, 850);
				}, 800);
			}, 400);
		}

		function hideSection4() {
			$(".awards-wrapper").removeClass("active");
			setTimeout(function(){
			$(".partners-wrapper").removeClass("active");
				setTimeout(function(){
					$(".partners .background-title").removeClass("active");
					setTimeout(function(){
						$(".partners").hide();
					}, 850);
				}, 600);
			}, 400);
		}



	/***************************************************************
		Scrolling - Show
	***************************************************************/

		function showSection1() {
			if ( !$(".opening-background").hasClass("active") ) {
				$(".opening").show();
				setTimeout(function(){
					$(".opening-background").addClass("active");
					setTimeout(function(){
						$(".opening-content").addClass("active");
						setTimeout(function(){
							scrollingNow = false;
						}, 800);
					}, 600);
				}, 50);
			}
		}

		function showSection2() {
			if ( !$(".works .background-title").hasClass("active") ) {
				$(".works").show();
				setTimeout(function(){
					$(".works .background-title").addClass("active");
					setTimeout(function(){
						$(".works-track").addClass("active");
						$(".works-list").removeClass("fade");
						setTimeout(function(){
							scrollingNow = false;
						}, 1300);
					}, 600);
				}, 50);
			}
		}

		function showSection3() {
			if ( !$(".about .background-title").hasClass("active") ) {
				$(".about").show();
				setTimeout(function(){
					$(".about .background-title").addClass("active");
					setTimeout(function(){
						$(".about-text").addClass("active");
						setTimeout(function(){
							$(".about-image").addClass("active");
							setTimeout(function(){
								scrollingNow = false;
							}, 800);
						}, 400);
					}, 600);
				}, 50);
			}
		}

		function showSection4() {
			if ( !$(".partners .background-title").hasClass("active") ) {
				$(".partners").show();
				setTimeout(function(){
					$(".partners .background-title").addClass("active");
					setTimeout(function(){
						$(".partners-wrapper").addClass("active");
						setTimeout(function(){
							$(".awards-wrapper").addClass("active");
							setTimeout(function(){
								scrollingNow = false;
							}, 800);
						}, 400);
					}, 600);
				}, 50);
			}
		}




	/***************************************************************
		Scrolling - Show Mobile
	***************************************************************/

		function showSectionMobile2() {
			if ( !$(".works-track").hasClass("active") ) {
				$(".works").show();
				setTimeout(function(){
					$(".works-track").addClass("active");
					$(".works-list").removeClass("fade");
					setTimeout(function(){
						scrollingNow = false;
					}, 1300);
				}, 50);
			}
		}

		function showSectionMobile3() {
			if ( !$(".about-text").hasClass("active") ) {
				$(".about").show();
				setTimeout(function(){
					$(".about-text").addClass("active");
					setTimeout(function(){
						$(".about-image").addClass("active");
						setTimeout(function(){
							scrollingNow = false;
						}, 800);
					}, 400);
				}, 50);
			}
		}

		function showSectionMobile4() {
			if ( !$(".partners-wrapper").hasClass("active") ) {
				$(".partners").show();
				setTimeout(function(){
					$(".partners-wrapper").addClass("active");
					setTimeout(function(){
						$(".awards-wrapper").addClass("active");
						setTimeout(function(){
							scrollingNow = false;
						}, 800);
					}, 400);
				}, 50);
			}
		}



	/***************************************************************
		Cursor
	***************************************************************/

		$(window).mousemove(function(event){
			$(".cursor, .cursor-follower").css({
				"left": event.clientX,
				"top": event.clientY
			});
		});

		$(document).on("mouseover", "a, button", function(){
			$(".cursor").addClass("hide");
			$(".cursor-follower").addClass("hover");
		}).mouseout(function(){
			$(".cursor").removeClass("hide");
			$(".cursor-follower").removeClass("hover");
		});

		$(document).on("mouseover", ".works", function(){
			$(".cursor").addClass("drag");
			$(".cursor-follower").addClass("drag");
		}).mouseout(function(){
			$(".cursor").removeClass("drag");
			$(".cursor-follower").removeClass("drag");
		});



	/***************************************************************
		Invert Colors
	***************************************************************/

		var mouseHoldingInterval;
		var isMouseDown = false;

		window.addEventListener("mouseup", handleMouseUp);
		window.addEventListener("mousedown", handleMouseDown);

		function handleMouseUp() {
			isMouseDown = false;
			clearTimeout(mouseHoldingInterval);
			$(".cursor").removeClass("grow");
		}

		function handleMouseDown() {
			isMouseDown = true;
			$(".cursor").addClass("grow");
			mouseHoldingInterval = setTimeout(mousePressing, 1200);
		}

		function mousePressing() {
			if ( isMouseDown ) {
				$(".cursor").removeClass("grow");
				var fromTop = $(".cursor").css("top");
				var fromLeft = $(".cursor").css("left");
				$(".cursorGrow").css({
					"top": fromTop,
					"left": fromLeft
				});

				var windowWidth = window.innerWidth;
				fromLeft = parseInt(fromLeft);
				if ( (fromLeft/windowWidth*100) < 20 || (fromLeft/windowWidth*100) > 80 ) {
					$(".cursorGrow").addClass("growbig");
				} else {
					$(".cursorGrow").addClass("grow");
				}

				setTimeout(function(){
					if ( $("body").hasClass("invert") ) {
						setCookie('invertcolors', 'false', 365);
					} else {
						setCookie('invertcolors', 'true', 365);
					}
					$("body").toggleClass("invert");
					$(".cursorGrow").fadeOut(1000, function(){
						$(".cursorGrow").removeClass("grow growbig");
						$(".cursorGrow").show();
					});
				}, 800);
			}
		}

		function setCookie(name, value, days) {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days*24*60*60*1000));
				expires = "; expires=" + date.toUTCString();
			}
			document.cookie = name + "=" + (value || "")  + expires + "; path=/";
		}

		function getCookie(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}


































	/***************************************************************
		Input Effect
	***************************************************************/

		if ( $(".loader-letter").length ) {
			var that = $(".loader-letter");
			$(that).fadeIn(1000);
			setTimeout(function(){
				var size = $(that).find("span").text().split(".")[1] ? $(that).find("span").text().split(".")[1].length : 0;
				$(that).prop("Counter", 25).animate({
					Counter: 0
				}, {
					duration: 1500,
					easing: "easeOutQuad",
					step: function (now) {
						var theLetter = String.fromCharCode( Math.ceil(now) + 97 );
						$(that).find("span").text( theLetter )
					},
					complete: function(){
						setTimeout(function(){
							$(".loader").addClass("animate");
							setTimeout(function(){
								$(".loader-overflow").addClass("hide");
								setTimeout(function(){
									$(".loader").fadeOut();
									switch ( currentSection ) {
										case 1:
											window.location.hash = "#home";
											if ( window.innerWidth <= 992 ) {
												$("html, body").scrollTop(0);
											}
											showSection1();
										break;

										case 2:
											window.location.hash = "#works";
											if ( window.innerWidth <= 992 ) {
												var targetOffset = $(".works").offset().top;
												$("html, body").scrollTop(targetOffset);
												showSectionMobile2();
											} else {
												showSection2();
											}
										break;

										case 3:
											window.location.hash = "#about";
											if ( window.innerWidth <= 992 ) {
												var targetOffset = $(".about").offset().top;
												$("html, body").scrollTop(targetOffset);
												showSectionMobile3();
											} else {
												showSection3();
											}
										break;

										case 4:
											window.location.hash = "#sugar";
											if ( window.innerWidth <= 992 ) {
												var targetOffset = $(".partners").offset().top;
												$("html, body").scrollTop(targetOffset);
												showSectionMobile4();
											} else {
												showSection4();
											}
										break;
									}
								}, 600);
							}, 1200);
						}, 200);
					}
				});
			}, 50);
		}















	/***************************************************************
		Input Effect
	***************************************************************/

		$("input").focusout(function(){
			if ( $(this).val() == "" ) {
				$(this).parents(".input-wrapper").removeClass("active");
			} else {
				$(this).parents(".input-wrapper").addClass("active");
			}
		});



	/***************************************************************
		Move Elements
	***************************************************************/

		moveElements();

		function moveElements() {
			if ( window.innerWidth < 768 ) {
				if ( $("#elementOldPlace > div").length ) {
					$("#elementOldPlace > div").appendTo( $("#elementNewPlace") );
				}
			} else {
				if ( $("#elementNewPlace > div").length ) {
					$("#elementNewPlace > div").appendTo( $("#elementOldPlace") );
				}
			}
		}

		$(window).resize(moveElements);



	/***************************************************************
		Form Validation Functions
	***************************************************************/
	
		function removeDashed(number) {
			return number.replace(/-/g, "");
		}
		
		function onlyDigits(number) {
			var reg = new RegExp('^[0-9]+$');
			return reg.test(number);
		}
		
		function checkPhone(number) {
			if ( onlyDigits(number) ) {
				if ( number.length < 9 || number.length > 10 ) {
					return false;
				} else {
					if ( number.length == 10 ) {
						if ( number.substring(0, 2) != "05" && number.substring(0, 2) != "07" ) {
							return false;
						} else {
							return true;
						}
					} else {
						return true;
					}
				}
			} else {
				return false;
			}
		}

		function checkEmail(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}

		if (!String.prototype.startsWith) {
			String.prototype.startsWith = function(searchString, position){
				position = position || 0;
				return this.substr(position, searchString.length) === searchString;
			};
		}



	/***************************************************************
		Form Validation
	***************************************************************/
		
		$("form").on("submit", function(event){
			event.preventDefault();
			
			var contactValidationFlag = true;
			
			$(this).find(".input-wrapper.check").each(function(index){
				// Empty Validation
				if ( $.trim( $(this).find("input").val() ) == "" ) {
					contactValidationFlag = false;
					$(this).find("span").text("שדה זה הינו חובה");
					$(this).addClass("error");

				} else {
					// Phone Validation
					if ( $(this).hasClass("checkPhone") ) {
						var newNumber = removeDashed( $(this).find("input").val() );
						if ( !checkPhone( newNumber ) ) {
							contactValidationFlag = false;
							$(this).find("span").text("נא להזין מספר טלפון חוקי");
							$(this).addClass("error");
						} else {
							phoneAlertMessage = "";
							$(this).removeClass("error");
						}
						
					// Email Validation
					} else if ( $(this).hasClass("checkEmail") ) {
						if ( !checkEmail( $(this).find("input").val() ) ) {
							contactValidationFlag = false;
							$(this).find("span").text("נא להזין כתובת דוא\"ל תקינה");
							$(this).addClass("error");
						} else {
							emailAlertMessage = "";
							$(this).removeClass("error");
						}

					} else {
						$(this).removeClass("error");
					}
				}
			});
			
			if ( contactValidationFlag ) {
				$("#sendForm").prop("disabled", true);
				sendForm();
			}
		});


	
	/***************************************************************
		Send Form Function
	***************************************************************/

		function sendForm() {
			var success;
			$.ajax("interface/mail.php", {
				method: "POST",
				async: false,
				data: $("form").serialize(),
				success: function(response){
					if (response == 1) {
						$("form")[0].reset();
						$("#formWrapper").fadeOut(function(){
							$("#thankWrapper").fadeIn();
						});
					} else {
						$("#sendForm").prop("disabled", false);
					}
				}
			});
			return success;
		}

		
	
});